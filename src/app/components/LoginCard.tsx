import { useState } from 'react';

interface StepCardProps {
    onNext: () => void;
    onClose: () => void;
}

export default function LoginCard({ onNext, onClose }: StepCardProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://port-0-career-teen-backend-mc1vuqgt979868f3.sel5.cloudtype.app/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            );

            if (!response.ok) {
                alert('로그인 실패');
                return;
            }

            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                console.log('로그인 성공:', data);
                onClose();
            } else {
                alert('토큰이 응답에 없습니다.');
            }
        } catch (err) {
            console.error('로그인 오류:', err);
            alert('로그인 중 오류가 발생했습니다.');
        }
    };

    return (
        <div
            className="w-full h-full absolute z-20 px-[5%] overflow-hidden flex items-center backdrop-blur-[3px]"
            style={{ backgroundColor: 'rgba(2, 9, 17, 0.8)' }}
        >
            <form className="bg-white w-full px-[20px] py-[40px] rounded-[12px]">
                <p className="font-semibold text-[20px] text-center mb-[40px]">로그인</p>
                <div className="flex flex-col gap-[10px] mb-[24px]">
                    <p className="text-[18px] font-medium text-[#222]">아이디</p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"
                    />
                </div>
                <div className="flex flex-col gap-[10px] mb-[30px]">
                    <p className="text-[18px] font-medium text-[#222]">비밀번호</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-[20px] py-[17px] rounded-[8px] border border-[#CCC] bg-[#F0F0F0]"
                    />
                </div>
                <div className="flex flex-col gap-[16px]">
                    <button
                        onClick={handleLogin}
                        className="py-[17px] rounded-[8px] bg-[#276FE2] font-medium text-white text-[19px] w-full"
                    >
                        로그인
                    </button>
                    <button
                        type="button"
                        onClick={onNext}
                        className="py-[17px] rounded-[8px] font-medium text-[#276FE2] text-[19px] w-full border border-[#276FE2]"
                    >
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    );
}
