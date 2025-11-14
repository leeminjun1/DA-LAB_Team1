// 클로버랑 설정?

import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)


// 클로버 주기 
export async function giveClover(groupId, receiverId, cloverCount, message) {
    const { data, error } = await supabase
    .from('clovers')
    .insert([{ 
        groupId: groupId, 
        receiver_Id: receiverId, 
        clover_count: cloverCount, 
        message: message 
    }])

    if (error) {
        console.error('클로버 주기 실패:', error)
    } else {
        console.log('클로버 주기 성공!')
    }
}

// 통계 및 알림	= 칭찬 통계
export async function getCloverStats(groupId) {
    const { data, error } = await supabase
    .from('clovers')
    .select('receiver_Id, clover_count')
    .eq('groupId', groupId)

    if (error) {
        console.error('통계 조회 실패:', error)
    } else {
        const stats = {}
        data.forEach(clover => {
            if (stats[clover.receiver_Id]) {
                stats[clover.receiver_Id] += clover.clover_count
            } else {
                stats[clover.receiver_Id] = clover.clover_count
            }
        })
        return stats
    }
}

// 통계 및 알람 - 랭킹
export async function Ranking(groupId) {
    const { data, error } = await supabase
    .from('clovers')
    .select('receiver_Id, clover_count')
    .eq('groupId', groupId)

    if (error) {
        console.error('랭킹 조회 실패:', error)
        return []
    }

    const stats = {}
    data.forEach(clover => {
        if (stats[clover.receiver_Id]) {
            stats[clover.receiver_Id] += clover.clover_count
        } else {
            stats[clover.receiver_Id] = clover.clover_count
        }
    })

    const userIds = Object.keys(stats)

    const { data: users, error: userError } = await supabase
    .from('users')
    .select('id, nickname')
    .in('id', userIds)

    if (userError) {
        console.error('사용자 정보 조회 실패:', userError)
        return []
    }

    const ranking = users.map(user => ({
        nickname: user.nickname,
        count: stats[user.id]
    }))
    .sort((a, b) => b.count - a.count)

    return ranking
}