"use client";

import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function SimpleMonthPicker() {
  const [month, setMonth] = useState("");

  return (
    <div className="relative w-[170px]">
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="myInputBox text-[14px] text-[#858585] w-full pl-8 pr-8"
        placeholder="년-월 선택"
      />
    </div>
  );
}
