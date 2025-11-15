// 로그인 관련 

import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

const supabaseAdmin = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_SECRET_KEY
)


// 회원가입 - 닉네임 설정 - nickname 중복 확인하기 
export async function checkNickname(nickname) {
    const { data, error } = await supabase
        .from('users')
        .select('nickname')
        .eq('nickname', nickname)
        .maybeSingle()
    
    if (error) {
        return { success: false, message: error.message }
    }

    if (data !== null) {
        return { success: false, message: '이미 존재하는 이름입니다.' }
    } else {
        return { success: true, message: '사용 가능한 이름입니다.'}
    }
}

// 회원가입 - Email은 unipue?이니까 중복이면 안된다고 생각
export async function checkEmail(email) {
    const { data, error } = await supabase
    .from('users')
    .select('email')
    .eq('email', email)
    .maybeSingle()

    if (error) {
        return { success: false, message: error.message }
    }

    if (data) {
        return { success: false, message: '이미 존재하는 이메일입니다.' }
    } else {
        return { success: true, message: '사용 가능한 이메일입니다.' }
    }

}

// 회원가입 - 회원 정보를 DB users에 입력 (+ 비밀번호 확인)
export async function signUpUser(nickname, email, password, repassword) {

    // 비밀번호 한 번 더 입력하기 
    if (password !== repassword) {
        return { success: false, message: '비밀번호가 일치하지 않습니다.' }
    }
    
    // Supabase Auth로 회원가입
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password
    })

    if (authError) {
        console.error('회원가입 실패:', authError)
        return { success: false, message: authError.message }
    }

    // users 테이블에 사용자 정보 저장
    if (authData.user) {
        const { error: dbError } = await supabase
            .from('users')
            .insert([{ 
                id: authData.user.id,
                nickname: nickname,
                email: email,
                password: password,
                join_group: []
            }])

        // Auth는 생성되었지만 DB 저장 실패한 경우
        if (dbError) {
            await supabase.auth.admin.deleteUser(authData.user.id)
            return { success: false, message: '사용자 정보 저장에 실패했습니다.' }
        }
    }

    return { success: true, user: authData.user }
}

// 로그인 - (이메일 체크, 비밀번호 체크, 유저 키 반환)
export async function loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    if (error) {
        console.error('로그인 실패:', error)
        return { success: false, message: error.message }
    }

    if (!data.user) {
        console.log('로그인에 실패했습니다.:', error)
        return { success: false, message: '로그인에 실패했습니다.' }
    }

    return { success: true, user: data.user, userId: data.user.id }
}

// 로그아웃
export async function logOut() {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
        console.error('로그아웃 실패:', error)
        return { success: false, message: error.message }
    }

    return { success: true }
}

// 회원 탈퇴
export async function deleteUser(id) {

    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(id)

    if (authError) {
        return { success: false, message: 'Auth 삭제 실패' }
    }

    const { error: dbError } = await supabase
        .from('users')
        .delete()
        .eq('id', id)

    if (dbError) {
        return { success: false, message: 'DB 삭제 실패' }
    }

    return { success: true }
}