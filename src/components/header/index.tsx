import React from 'react';
import * as S from './styled';

export function Header() {
    return (
        <S.HeaderWrapper>
            <S.HeaderContent>
                <S.HeaderContentTitle>
                    <S.HeaderTitle>
                        WILIOT
                        <p>Test</p>
                    </S.HeaderTitle>
                </S.HeaderContentTitle>
                <S.LineBottom />
            </S.HeaderContent>
        </S.HeaderWrapper>
    );
}

