"use client";
import React, { useState, FC, ReactNode } from "react";
import Image from "next/image";
import illustration from "@/illustration-sign-up-mobile.svg";

const newsletter = () => {
  return (
    <div>
      <div>
        <div>
          <Image src={illustration} alt="backgroundImage" />
        </div>
        <h2>Stay updated!</h2>
        <p>Join 60,000 product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <input type="email" />
        <button>Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
};

export default newsletter;
