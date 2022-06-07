import React from 'react'
import { BoxProps } from '../../App'
import * as S from './styled'

export function Box({ id, temperature }: BoxProps) {
    return (
        <S.BoxContainer>
            <S.BoxContent>
                <S.BoxContentTitle>
                    ID {id}
                </S.BoxContentTitle>
                <S.BoxContentSubtitle>
                    Temp: {temperature} C
                </S.BoxContentSubtitle>
            </S.BoxContent>
        </S.BoxContainer>
    )
}
