'use client';

import { useState, useEffect } from 'react';

interface StepCardProps {
    onNext: () => void;
    onClose: () => void;
}

export default function LoginCard({ onNext, onClose }: StepCardProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(
                'https://port-0-career-teen-backend-mc1vuqgt979868f3.sel5.cloudtype.app/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username.trim(),
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                const errorMessage = data.message || '로그인에 실패했습니다.';
                alert(errorMessage);
                return;
            }

            if (data.accessToken) {
                if (isMounted && typeof window !== 'undefined') {
                    localStorage.setItem('token', data.accessToken);
                    if (data.user) {
                        localStorage.setItem('user', JSON.stringify(data.user));
                    }
                }

                console.log('로그인 성공:', data);
                
                onClose();
                
                setTimeout(() => {
                    document.body.style.overflow = "";
                    alert('로그인이 완료되었습니다.');
                }, 100);
                
            } else {
                alert('서버 응답에 토큰이 없습니다.');
            }
        } catch (err) {
            console.error('로그인 오류:', err);
            alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isLoading) {
            handleLogin(e as any);
        }
    };

    return (
        <div className="w-full h-full absolute z-20 px-[5%] overflow-hidden flex items-center backdrop-blur-[3px]"
            style={{ backgroundColor: 'rgba(2, 9, 17, 0.8)' }}>
            <form
                className="bg-white w-full pt-[40px] px-[20px] pb-[40px] rounded-[12px] relative"
            >
                <p className="font-semibold text-[20px] text-center mb-[40px]">로그인</p>

                <div className="flex flex-col gap-[10px] mb-[24px]">
                    <p className="text-[18px] font-medium text-[#222]">아이디</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="아이디를 입력하세요"
                        disabled={isLoading}
                        className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0] disabled:opacity-50"
                    />
                </div>

                <div className="flex flex-col gap-[10px] mb-[30px]">
                    <p className="text-[18px] font-medium text-[#222]">비밀번호</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="비밀번호를 입력하세요"
                        disabled={isLoading}
                        className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0] disabled:opacity-50"
                    />
                </div>

                <div className="flex flex-col gap-[16px]">
                    <button
                        type="button"
                        onClick={handleLogin}
                        disabled={isLoading || !username.trim() || !password.trim()}
                        className="py-[17px] rounded-[8px] bg-[#276FE2] font-medium text-white text-[19px] w-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1e5bc7] transition-colors"
                    >
                        {isLoading ? '로그인 중' : '로그인'}
                    </button>

                    <button
                        type="button"
                        onClick={onNext}
                        disabled={isLoading}
                        className="py-[17px] rounded-[8px] font-medium text-[#276FE2] text-[19px] w-full border border-[#276FE2] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f0f7ff] transition-colors"
                    >
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    );
}