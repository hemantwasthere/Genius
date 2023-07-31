"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("de90f623-e589-4a30-ba8e-2675e059ab39");
    }, []);

    return null;
};
