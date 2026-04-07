"use client";

import { useState } from "react";
import Link from "next/link";

const PLATFORMS = [
  {
    id: "netlify",
    name: "Netlify",
    tagline: "Easiest — drag & drop, free plan",
    recommended: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#00AD9F" />
        <path d="M13 20h14M20 13v14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="9" y="26" width="22" height="2" rx="1" fill="#fff" opacity="0.7" />
        <rect x="9" y="12" width="22" height="2" rx="1" fill="#fff" opacity="0.7" />
      </svg>
    ),
    steps: [
      {
        title: "Create a free Netlify account",
        desc: "Go to netlify.com and sign up. You can use your GitHub, GitLab, or email.",
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F0FFFE" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#fff" stroke="#00AD9F" strokeWidth="1.5" />
            <rect x="40" y="38" width="80" height="10" rx="4" fill="#00AD9F" opacity="0.25" />
            <rect x="40" y="56" width="140" height="8" rx="4" fill="#E5E7EB" />
            <rect x="40" y="72" width="140" height="8" rx="4" fill="#E5E7EB" />
            <rect x="80" y="94" width="100" height="28" rx="6" fill="#00AD9F" />
            <rect x="100" y="104" width="60" height="8" rx="3" fill="#fff" opacity="0.9" />
          </svg>
        ),
      },
      {
        title: "Locate your website folder",
        desc: "Find the folder we delivered to you (e.g. my-website/). Make sure it contains an index.html file.",
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F8F9FA" />
            <rect x="20" y="30" width="100" height="80" rx="8" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M20 52h100" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="35" y="46" fill="#92400E" fontSize="10" fontWeight="700">my-website/</text>
            <rect x="30" y="60" width="80" height="8" rx="3" fill="#fff" opacity="0.8" />
            <text x="35" y="68" fill="#92400E" fontSize="8">📄 index.html</text>
            <rect x="30" y="76" width="80" height="8" rx="3" fill="#fff" opacity="0.8" />
            <text x="35" y="84" fill="#92400E" fontSize="8">🎨 styles.css</text>
            <rect x="30" y="92" width="80" height="8" rx="3" fill="#fff" opacity="0.8" />
            <text x="35" y="100" fill="#92400E" fontSize="8">⚡ script.js</text>
            <path d="M140 70 L170 70" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0 0 L6 3 L0 6" fill="none" stroke="#9CA3AF" strokeWidth="1" />
              </marker>
            </defs>
            <rect x="170" y="52" width="70" height="36" rx="6" fill="#fff" stroke="#00AD9F" strokeWidth="1.5" />
            <text x="185" y="74" fill="#00AD9F" fontSize="9" fontWeight="700">Ready to</text>
            <text x="183" y="85" fill="#00AD9F" fontSize="9" fontWeight="700">upload ✓</text>
          </svg>
        ),
      },
      {
        title: "Drag your folder onto Netlify",
        desc: 'After logging in, go to "Sites" and look for the drag-and-drop zone labeled "Drag and drop your site output folder here". Drag your entire website folder onto it.',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F0FFFE" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#fff" stroke="#00AD9F" strokeWidth="2" strokeDasharray="6 3" />
            <text x="65" y="55" fill="#00AD9F" fontSize="11" fontWeight="700">Drop your folder here</text>
            <path d="M120 65 L120 95" stroke="#00AD9F" strokeWidth="2" />
            <path d="M110 86 L120 98 L130 86" fill="#00AD9F" />
            <rect x="88" y="100" width="84" height="10" rx="4" fill="#E5E7EB" />
            <text x="95" y="109" fill="#6B7280" fontSize="8">or browse to upload</text>
            {/* folder being dragged */}
            <rect x="160" y="15" width="58" height="44" rx="6" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" opacity="0.85" />
            <text x="175" y="40" fill="#92400E" fontSize="9" fontWeight="700">folder</text>
            <path d="M175 55 L150 75" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2" />
          </svg>
        ),
      },
      {
        title: "Your site is live!",
        desc: "Netlify instantly gives you a URL like amazing-site-abc123.netlify.app. Share it or set up your custom domain in Site settings → Domain management.",
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#ECFDF5" />
            <circle cx="130" cy="60" r="30" fill="#10B981" opacity="0.15" />
            <circle cx="130" cy="60" r="20" fill="#10B981" opacity="0.25" />
            <path d="M118 60 L126 68 L144 50" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="50" y="96" width="160" height="26" rx="8" fill="#fff" stroke="#10B981" strokeWidth="1.5" />
            <text x="60" y="113" fill="#059669" fontSize="9" fontWeight="700">🌐 your-site.netlify.app</text>
          </svg>
        ),
      },
    ],
  },
  {
    id: "vercel",
    name: "Vercel",
    tagline: "Best for Next.js / React projects",
    recommended: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#111" />
        <path d="M20 10 L32 30 L8 30 Z" fill="#fff" />
      </svg>
    ),
    steps: [
      {
        title: "Create a Vercel account",
        desc: "Go to vercel.com and sign up with GitHub (recommended) or email.",
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F8F9FA" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#111" />
            <path d="M130 42 L155 82 L105 82 Z" fill="#fff" opacity="0.9" />
            <rect x="60" y="92" width="140" height="18" rx="6" fill="#fff" opacity="0.1" />
            <text x="90" y="105" fill="#fff" fontSize="9" fontWeight="700">Continue with GitHub</text>
          </svg>
        ),
      },
      {
        title: "Push your code to GitHub",
        desc: "Create a new GitHub repository and push your website files to it. If you're not sure how, use GitHub Desktop — it has a simple drag-and-drop interface.",
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F8F9FA" />
            <rect x="20" y="30" width="90" height="80" rx="8" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="30" y="52" fill="#92400E" fontSize="9" fontWeight="700">my-website/</text>
            <rect x="30" y="58" width="70" height="7" rx="3" fill="#fff" opacity="0.8" />
            <rect x="30" y="70" width="60" height="7" rx="3" fill="#fff" opacity="0.8" />
            <rect x="30" y="82" width="50" height="7" rx="3" fill="#fff" opacity="0.8" />
            <path d="M115 70 L145 70" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arr2)" />
            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0 0 L6 3 L0 6" fill="none" stroke="#9CA3AF" strokeWidth="1" />
              </marker>
            </defs>
            <rect x="148" y="30" width="92" height="80" rx="8" fill="#24292E" />
            <circle cx="164" cy="70" r="18" fill="#fff" opacity="0.07" />
            <text x="158" y="63" fill="#fff" fontSize="8">GitHub</text>
            <text x="153" y="78" fill="#fff" fontSize="7" opacity="0.7">repository</text>
          </svg>
        ),
      },
      {
        title: "Import your repo on Vercel",
        desc: 'Click "Add New Project" → select your GitHub repo → click "Deploy". Vercel detects your framework automatically.',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F8F9FA" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#111" />
            <rect x="36" y="36" width="130" height="12" rx="4" fill="#fff" opacity="0.08" />
            <text x="42" y="46" fill="#fff" fontSize="8">my-website — main</text>
            <rect x="36" y="56" width="188" height="32" rx="6" fill="#fff" opacity="0.05" />
            <text x="46" y="76" fill="#6EE7B7" fontSize="9">✓ Build successful</text>
            <rect x="36" y="96" width="100" height="16" rx="6" fill="#fff" />
            <text x="52" y="108" fill="#111" fontSize="8" fontWeight="700">Visit your site →</text>
          </svg>
        ),
      },
      {
        title: "Your site is live instantly",
        desc: "Vercel gives you a yourproject.vercel.app URL immediately. Every time you push to GitHub, the site auto-updates.",
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#ECFDF5" />
            <circle cx="130" cy="60" r="30" fill="#10B981" opacity="0.15" />
            <circle cx="130" cy="60" r="20" fill="#10B981" opacity="0.25" />
            <path d="M118 60 L126 68 L144 50" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="50" y="96" width="160" height="26" rx="8" fill="#fff" stroke="#10B981" strokeWidth="1.5" />
            <text x="72" y="113" fill="#059669" fontSize="9" fontWeight="700">🌐 your-site.vercel.app</text>
          </svg>
        ),
      },
    ],
  },
  {
    id: "github-pages",
    name: "GitHub Pages",
    tagline: "Free, great for static sites",
    recommended: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#24292E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M20 8C13.37 8 8 13.37 8 20.01c0 5.31 3.44 9.82 8.21 11.41.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.02-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C28.56 29.83 32 25.32 32 20.01 32 13.37 26.63 8 20 8z" fill="#fff" />
      </svg>
    ),
    steps: [
      {
        title: "Create a GitHub account",
        desc: "Sign up at github.com. It's free. You'll store your website files here.",
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F8F9FA" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#24292E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M130 42c-9 0-16 7-16 16.01 0 7.07 4.58 13.06 10.94 15.18.8.14 1.09-.35 1.09-.77 0-.38-.01-1.38-.01-2.69-4.45.96-5.38-2.14-5.38-2.14-.73-1.84-1.77-2.33-1.77-2.33-1.45-.98.1-.97.1-.97 1.6.11 2.45 1.64 2.45 1.64 1.43 2.45 3.74 1.74 4.66 1.33.15-1.04.56-1.74 1.01-2.13-3.55-.4-7.28-1.78-7.28-7.91 0-1.75.63-3.18 1.65-4.3-.17-.4-.72-2.03.16-4.22 0 0 1.35-.43 4.4 1.64a15.3 15.3 0 014.01-.54c1.36 0 2.73.18 4.01.54 3.05-2.07 4.4-1.64 4.4-1.64.88 2.19.32 3.82.16 4.22 1.03 1.12 1.65 2.55 1.65 4.3 0 6.14-3.74 7.5-7.31 7.89.57.49 1.09 1.46 1.09 2.95 0 2.13-.01 3.86-.01 4.39 0 .43.29.93 1.1.77C145.42 71.07 146 65.08 146 58.01 146 49 139 42 130 42z" fill="#fff" />
            <rect x="60" y="100" width="140" height="14" rx="6" fill="#fff" opacity="0.1" />
            <text x="90" y="111" fill="#6EE7B7" fontSize="8" fontWeight="700">Create free account →</text>
          </svg>
        ),
      },
      {
        title: "Create a new repository",
        desc: 'Click the "+" icon → "New repository". Name it exactly: yourusername.github.io (replace with your actual username). Set it to Public and click "Create repository".',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F8F9FA" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#24292E" />
            <rect x="36" y="36" width="188" height="12" rx="4" fill="#fff" opacity="0.1" />
            <text x="42" y="46" fill="#fff" fontSize="8">Repository name:</text>
            <rect x="36" y="54" width="188" height="20" rx="4" fill="#0D1117" />
            <text x="42" y="68" fill="#58A6FF" fontSize="9" fontWeight="700">yourusername.github.io</text>
            <rect x="36" y="82" width="60" height="5" rx="2" fill="#3FB950" opacity="0.8" />
            <text x="36" y="80" fill="#3FB950" fontSize="7">● Public</text>
            <rect x="36" y="94" width="100" height="16" rx="6" fill="#238636" />
            <text x="48" y="106" fill="#fff" fontSize="8" fontWeight="700">Create repository</text>
          </svg>
        ),
      },
      {
        title: "Upload your website files",
        desc: 'Click "uploading an existing file" → drag your website files directly into the browser (not the folder, the files inside) → scroll down and click "Commit changes".',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#F8F9FA" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#24292E" />
            <rect x="36" y="30" width="188" height="55" rx="6" fill="#0D1117" strokeDasharray="4 2" stroke="#58A6FF" strokeWidth="1.5" />
            <text x="85" y="52" fill="#58A6FF" fontSize="9">Drag files here</text>
            <text x="90" y="66" fill="#6E7681" fontSize="8">index.html, styles.css...</text>
            <path d="M130 72 L130 82" stroke="#58A6FF" strokeWidth="1.5" />
            <path d="M122 78 L130 86 L138 78" fill="#58A6FF" />
            <rect x="36" y="94" width="110" height="16" rx="6" fill="#238636" />
            <text x="48" y="106" fill="#fff" fontSize="8" fontWeight="700">Commit changes</text>
          </svg>
        ),
      },
      {
        title: "Enable GitHub Pages",
        desc: 'Go to your repo → Settings → Pages → under "Source" select "Deploy from a branch" → select main branch → click Save. Wait 1-2 minutes.',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#ECFDF5" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#0D1117" />
            <text x="36" y="42" fill="#fff" fontSize="9" fontWeight="700">Settings → Pages</text>
            <rect x="36" y="50" width="130" height="10" rx="3" fill="#161B22" />
            <text x="42" y="59" fill="#58A6FF" fontSize="7">Source: Deploy from branch ▾</text>
            <rect x="36" y="66" width="80" height="10" rx="3" fill="#161B22" />
            <text x="42" y="75" fill="#58A6FF" fontSize="7">Branch: main ▾</text>
            <rect x="36" y="80" width="50" height="14" rx="6" fill="#238636" />
            <text x="42" y="90" fill="#fff" fontSize="7" fontWeight="700">Save</text>
            <rect x="36" y="100" width="188" height="12" rx="4" fill="#238636" opacity="0.2" />
            <text x="46" y="110" fill="#3FB950" fontSize="8">🌐 yourusername.github.io — Live!</text>
          </svg>
        ),
      },
    ],
  },
  {
    id: "cpanel",
    name: "cPanel / FTP",
    tagline: "For traditional web hosting plans",
    recommended: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#FF6C2C" />
        <rect x="8" y="12" width="24" height="16" rx="3" fill="#fff" opacity="0.2" />
        <rect x="11" y="15" width="18" height="10" rx="2" fill="#fff" opacity="0.5" />
        <rect x="14" y="31" width="12" height="3" rx="1" fill="#fff" opacity="0.7" />
        <rect x="11" y="34" width="18" height="2" rx="1" fill="#fff" opacity="0.5" />
      </svg>
    ),
    steps: [
      {
        title: "Log in to your hosting cPanel",
        desc: 'Go to yourdomain.com/cpanel or check the email your host sent you for the cPanel login URL. Enter your username and password.',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#FFF7ED" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#fff" stroke="#FF6C2C" strokeWidth="1.5" />
            <rect x="36" y="36" width="188" height="18" rx="4" fill="#FFF7ED" />
            <text x="42" y="49" fill="#FF6C2C" fontSize="9" fontWeight="700">cPanel Login</text>
            <rect x="36" y="60" width="188" height="14" rx="4" fill="#F3F4F6" />
            <text x="42" y="71" fill="#6B7280" fontSize="8">Username</text>
            <rect x="36" y="80" width="188" height="14" rx="4" fill="#F3F4F6" />
            <text x="42" y="91" fill="#6B7280" fontSize="8">Password ••••••••</text>
            <rect x="36" y="100" width="100" height="14" rx="6" fill="#FF6C2C" />
            <text x="58" y="111" fill="#fff" fontSize="8" fontWeight="700">Log In</text>
          </svg>
        ),
      },
      {
        title: "Open File Manager",
        desc: 'Inside cPanel, find and click "File Manager". This lets you upload files directly from your browser — no extra software needed.',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#FFF7ED" />
            <rect x="20" y="20" width="220" height="100" rx="8" fill="#fff" stroke="#FF6C2C" strokeWidth="1.5" />
            <text x="36" y="40" fill="#111" fontSize="9" fontWeight="700">cPanel Dashboard</text>
            {[0,1,2,3,4,5,6,7].map((i) => (
              <rect key={i} x={36 + (i % 4) * 50} y={48 + Math.floor(i / 4) * 38} width="44" height="32" rx="6" fill={i === 0 ? "#FFF7ED" : "#F9FAFB"} stroke={i === 0 ? "#FF6C2C" : "#E5E7EB"} strokeWidth={i === 0 ? 2 : 1} />
            ))}
            <text x="43" y="69" fill="#FF6C2C" fontSize="7" fontWeight="700">File</text>
            <text x="40" y="79" fill="#FF6C2C" fontSize="7" fontWeight="700">Manager</text>
          </svg>
        ),
      },
      {
        title: "Navigate to public_html",
        desc: 'In File Manager, click on "public_html" in the left panel. This is the folder that serves your website to the world.',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#FFF7ED" />
            <rect x="20" y="20" width="70" height="100" rx="4" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
            <text x="26" y="38" fill="#6B7280" fontSize="7" fontWeight="700">FOLDERS</text>
            <text x="26" y="52" fill="#9CA3AF" fontSize="7">/ (root)</text>
            <rect x="22" y="56" width="66" height="16" rx="4" fill="#FF6C2C" opacity="0.15" />
            <text x="26" y="68" fill="#FF6C2C" fontSize="7" fontWeight="700">📁 public_html</text>
            <text x="26" y="84" fill="#9CA3AF" fontSize="7">📁 mail</text>
            <text x="26" y="98" fill="#9CA3AF" fontSize="7">📁 etc</text>
            <rect x="96" y="20" width="144" height="100" rx="4" fill="#fff" stroke="#E5E7EB" strokeWidth="1" />
            <text x="104" y="38" fill="#111" fontSize="7" fontWeight="700">public_html/</text>
            <text x="104" y="54" fill="#6B7280" fontSize="7">📄 (empty — ready for your files)</text>
            <rect x="104" y="100" width="110" height="14" rx="6" fill="#FF6C2C" />
            <text x="122" y="111" fill="#fff" fontSize="7" fontWeight="700">Upload files here</text>
          </svg>
        ),
      },
      {
        title: "Upload your website files",
        desc: 'Click the "Upload" button in cPanel File Manager. Select all files from inside your website folder (index.html, styles.css, etc.) and upload them. Your site is live at yourdomain.com!',
        illustration: (
          <svg width="260" height="140" viewBox="0 0 260 140" fill="none" aria-hidden="true">
            <rect width="260" height="140" rx="12" fill="#ECFDF5" />
            <rect x="20" y="22" width="220" height="70" rx="8" fill="#fff" stroke="#FF6C2C" strokeWidth="1.5" strokeDasharray="5 2" />
            <path d="M130 38 L130 58" stroke="#FF6C2C" strokeWidth="2" />
            <path d="M122 42 L130 34 L138 42" fill="#FF6C2C" />
            <text x="90" y="76" fill="#6B7280" fontSize="8">Uploading files...</text>
            <rect x="40" y="82" width="180" height="10" rx="4" fill="#E5E7EB" />
            <rect x="40" y="82" width="130" height="10" rx="4" fill="#10B981" />
            <rect x="40" y="100" width="180" height="26" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
            <text x="58" y="117" fill="#059669" fontSize="8" fontWeight="700">🌐 yourdomain.com — Live!</text>
          </svg>
        ),
      },
    ],
  },
];

export default function HowToGoLivePage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const platform = PLATFORMS.find((p) => p.id === selectedPlatform);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(160deg, #F8F9FA 0%, #fff 100%)",
          borderBottom: "1.5px solid var(--border)",
          padding: "4rem 0 3rem",
          textAlign: "center",
        }}
      >
        <div className="container-tight">
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
            Deploy Guide
          </span>
          <h1 className="heading-hero" style={{ marginBottom: "1rem" }}>
            How to Make Your Website Live
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            Step-by-step instructions for publishing your AffordaWeb site. Pick the platform you want to use and we'll walk you through every step.
          </p>
        </div>
      </section>

      {/* Step 1 — Platform selector */}
      <section style={{ padding: "3.5rem 0" }}>
        <div className="container-tight">
          {!selectedPlatform && (
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 className="heading-section" style={{ marginBottom: "0.75rem" }}>
                Where do you want to host?
              </h2>
              <p style={{ color: "var(--text-muted)" }}>Choose the platform that best fits your situation.</p>
            </div>
          )}

          {/* Platform Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              marginBottom: selectedPlatform ? "3rem" : "0",
            }}
          >
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlatform(p.id)}
                style={{
                  background: selectedPlatform === p.id ? "var(--brand)" : "var(--surface)",
                  border: `2px solid ${selectedPlatform === p.id ? "var(--brand)" : "var(--border)"}`,
                  borderRadius: "var(--radius-card)",
                  padding: "1.5rem",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "all 0.2s",
                  position: "relative",
                }}
              >
                {p.recommended && (
                  <span
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      right: "0.75rem",
                      background: "#10B981",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "999px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Recommended
                  </span>
                )}
                <div style={{ opacity: selectedPlatform === p.id ? 0.9 : 1 }}>{p.icon}</div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      color: selectedPlatform === p.id ? "#fff" : "var(--text)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: selectedPlatform === p.id ? "rgba(255,255,255,0.75)" : "var(--text-muted)",
                    }}
                  >
                    {p.tagline}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Steps for selected platform */}
          {platform && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
                <h2 className="heading-section">
                  Deploying with {platform.name}
                </h2>
                <button
                  onClick={() => setSelectedPlatform(null)}
                  style={{
                    background: "none",
                    border: "1.5px solid var(--border)",
                    borderRadius: "8px",
                    padding: "0.35rem 0.85rem",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  ← Change platform
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {platform.steps.map((step, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "2rem",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                        <span
                          style={{
                            background: "var(--brand)",
                            color: "#fff",
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            fontSize: "0.85rem",
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}
                        </span>
                        <h3 style={{ fontWeight: 800, fontSize: "1rem", margin: 0 }}>{step.title}</h3>
                      </div>
                      <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0, paddingLeft: "2.65rem" }}>
                        {step.desc}
                      </p>
                    </div>
                    <div style={{ flexShrink: 0 }}>{step.illustration}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Still stuck CTA */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1.5px solid var(--border)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-tight" style={{ maxWidth: 600 }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🤔</div>
          <h2 className="heading-section" style={{ marginBottom: "0.75rem" }}>
            Still can't figure it out?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
            No worries — this stuff can be tricky. Send us a message and we'll walk you through it personally, or handle the deployment for you.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Contact Us for Help
            </Link>
            <Link href="/generate" className="btn-outline">
              Order a Website First
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
