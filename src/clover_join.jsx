//clover 보드 관리
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { supabase } from './supabaseClient'
//클로버 count?
export async function getClovers(receiver_Id,groupId) {
    const{data,error} = await supabase.from('clovers').select('*').eq('receiver_Id',receiver_Id).eq('groupId',groupId)
    if(error){
        console.error('클로버 조회 실패: ',error);
        return { clovers: [], totalCount: 0}
    }
    else{
        let CloverCount = 0;
        for(const i of data){
            CloverCount +=i.clover_count;
        }
        return{
            clovers: data,
            totalCount: CloverCount
        }
    }
}
//클로버 완성!
export async function clearClover(receiver_Id,groupId) {
    const answer = await getClovers(receiver_Id,groupId)
    if(answer.totalCount >= 4){
        return {
            tf: true,
            totalCount: answer.totalCount
        }
    }else{
        return{
            tf: false,
            totalCount: answer.totalCount,
            count: 4 - answer.totalCount
        }
    }
}
//클로버 수집 목록
export async function getCloverBook(receiver_Id) {
    const {data,error} = await supabase.from('clovers').select(`*,groups (id,group_name)`).eq('receiver_Id',receiver_Id).order('created_at', { ascending: false })
    if(error){
        console.error('클로버 목록 조회 실패:',error);
        return []
    }
    //그룹별로 클로버 묶기
    const ByGroup = {}
    data.forEach(clover => {
        const groupId = clover.groupId
        if(!ByGroup[groupId]){
            ByGroup[groupId] = {
                groupId: groupId,
                groupName: clover.groups?.group_name || '알수없음',
                clovers: [],
                totalCount: 0,
                completedClovers: 0
            }
        }
        ByGroup[groupId].clover.push(clovers)
        ByGroup[groupId].totalCount +=clovers.clover_count
        ByGroup[groupId].completedClovers = Math.floor(ByGroup[groupId].totalCount/4);
    })
    return Object.values(ByGroup)
}