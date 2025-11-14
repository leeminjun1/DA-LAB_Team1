import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)


// 회원가입 - 닉네임 설정 - nickname 중복 확인하기 
export async function checkNickname(nickname) {
    const { data, error } = await supabase
    .from('users')
    .select('nickname')
    .eq('nickname', nickname)

    if (error) { 
        console.error('Error fetching checkName:', error) 
    } else { 
        return data?.length > 0 ?? false
    }
}

// 회원가입 - Email은 unipue?이니까 중복이면 안된다고 생각
export async function checkEmail(email) {
    const { data, error } = await supabase
    .from('users')
    .select('email')
    .eq('email', email)

    if (error) {
        console.error('Error fetching checkEmail:',error)
    } else {
        return data?.length > 0 ?? false
    }
}

// 회원가입 - 회원 정보를 DB users에 입력 (+ 비밀번호 확인)
export async function inputUserdata(nickname, email, password, repassword) {

    if (password !== repassword) {
        console.error('비밀번호가 같지 않습니다!')
        return 
    }

    const { error } = await supabase
    .from('users')
    .insert([ { nickname: nickname, email: email, password: password } ])

    if (error) {
        console.error('회원가입 실패:', error)
    }
}

// 로그인 - (이메일 체크, 비밀번호 체크, 유저 키 반환)
export async function loginUser(email, password) {
    const { data, error } = await supabase
        .from('users')
        .select('id, email, password')
        .eq('email', email)

    if (error) {
        console.error('Error fetching loginuser_email:', error)
    }
    if (!data || data.length === 0) {
        console.log('등록된 Email이 없습니다.')
        return
    }
    if (data[0].password !== password) {
        console.log('비밀번호가 일치하지 않습니다.')
        return
    }

    return data[0].id
}

// 회원 탈퇴
export async function deleteUser(id) {
    const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id)

    if (error) {
        console.error('Error fetching deleteUser:', error)
    }
}