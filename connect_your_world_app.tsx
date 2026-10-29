import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Plus,
  ExternalLink,
  Check,
  RotateCcw,
  Play,
  Sparkles,
  ShieldCheck,
  Layers,
  Home,
  CreditCard,
  SlidersHorizontal,
  ChevronUp,
  Smartphone,
  Maximize2,
  Wifi,
  Battery,
  Signal,
} from 'lucide-react';

// ============================================================================
// 1. الشعارات الرسمية الدقيقة للشركات (Authentic Pixel-Perfect Brand SVGs)
// ============================================================================
const BrandIcons = {
  // شعار AI Passport (الحلقتان المتداخلتان البيضاء على خلفية سوداء - مطابق للقطة 00:05 - 00:08)
  Passport: ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path
        d="M11 22.5C8.5 20 8.5 16 11 13.5C13.5 11 17.2 12 19.2 15.2L21.5 19C23 21.2 25.5 21.2 27 19.7C28.5 18.2 28.5 15.5 26.5 13.5"
        stroke="white"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <path
        d="M25 13.5C27.5 16 27.5 20 25 22.5C22.5 25 18.8 24 16.8 20.8L14.5 17C13 14.8 10.5 14.8 9 16.3C7.5 17.8 7.5 20.5 9.5 22.5"
        stroke="white"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
    </svg>
  ),

  // شعار Perplexity الرسمي
  Perplexity: ({ className = "w-6 h-6", color = "white" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.2V21.8M4.8 6.6L19.2 17.4M19.2 6.6L4.8 17.4M4.8 6.6V17.4M19.2 6.6V17.4M12 2.2L4.8 6.6M12 2.2L19.2 6.6M12 21.8L4.8 17.4M12 21.8L19.2 17.4"
        stroke={color}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // شعار Gmail الرسمي رباعي الألوان
  Gmail: ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M2 6.5V18C2 19.1 2.9 20 4 20H6V9.8L12 14.3L18 9.8V20H20C21.1 20 22 19.1 22 18V6.5C22 4.6 19.8 3.5 18.3 4.7L12 9.4L5.7 4.7C4.2 3.5 2 4.6 2 6.5Z"
        fill="#EA4335"
      />
      <path d="M2 6.5V9.8L6 12.8V9.8L4.2 8.4C3.1 7.6 2 6.5 2 6.5Z" fill="#C5221F" />
      <path d="M2 9.8V18C2 19.1 2.9 20 4 20H6V9.8L2 6.8V9.8Z" fill="#4285F4" />
      <path d="M18 9.8V20H20C21.1 20 22 19.1 22 18V6.8L18 9.8Z" fill="#34A853" />
      <path d="M22 6.5C22 4.6 19.8 3.5 18.3 4.7L18 4.9V9.8L22 6.8V6.5Z" fill="#FBBC04" />
    </svg>
  ),

  // شعار ChatGPT (OpenAI) الرسمي
  ChatGPT: ({ className = "w-8 h-8", color = "white" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3975.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
        fill={color}
      />
    </svg>
  ),

  // شعار Google Calendar الرسمي رباعي الألوان مع الرقم 31 (مطابق للقطة 00:02 - 00:04)
  GoogleCalendar: ({ className = "w-9 h-9" }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M8.5 6H23.5V11.5H11.5V23.5H6V8.5C6 7.11929 7.11929 6 8.5 6Z" fill="#4285F4" />
      <path d="M23.5 6H27.5C28.8807 6 30 7.11929 30 8.5V11.5H23.5V6Z" fill="#1967D2" />
      <path d="M24.5 11.5H30V23.5H24.5V11.5Z" fill="#FBBC04" />
      <path d="M11.5 24.5H23.5V30H8.5C7.11929 30 6 28.8807 6 27.5V23.5H11.5V24.5Z" fill="#34A853" />
      <path d="M23.5 30V23.5H30L23.5 30Z" fill="#EA4335" />
      <rect x="11" y="11" width="14" height="14" fill="white" />
      <text
        x="18"
        y="21.4"
        textAnchor="middle"
        fill="#1A73E8"
        fontSize="10.2"
        fontWeight="700"
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        31
      </text>
    </svg>
  ),

  // شعار Claude (Anthropic) الرسمي
  Claude: ({ className = "w-7 h-7", color = "white" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <g stroke={color} strokeWidth="2.1" strokeLinecap="round">
        <line x1="12" y1="2.4" x2="12" y2="21.6" />
        <line x1="2.4" y1="12" x2="21.6" y2="12" />
        <line x1="5.2" y1="5.2" x2="18.8" y2="18.8" />
        <line x1="18.8" y1="5.2" x2="5.2" y2="18.8" />
        <line x1="8.3" y1="3.1" x2="15.7" y2="20.9" />
        <line x1="3.1" y1="8.3" x2="20.9" y2="15.7" />
        <line x1="3.1" y1="15.7" x2="20.9" y2="8.3" />
        <line x1="8.3" y1="20.9" x2="15.7" y2="3.1" />
      </g>
    </svg>
  ),

  // شعار GitHub الرسمي (مطابق للقطة 00:09)
  GitHub: ({ className = "w-8 h-8" }) => (
    <svg viewBox="0 0 24 24" fill="white" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),

  // شعار Google Gemini الرسمي رباعي الألوان (الأحمر بالأعلى، الأزرق باليمين، الأصفر بالأسفل، الأخضر باليسار كما في اللقطة 00:08 و 00:10)
  Gemini: ({ className = "w-8 h-8", idSuffix = "main" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <radialGradient id={`gem-r-${idSuffix}`} cx="50%" cy="14%" r="55%">
          <stop offset="0%" stopColor="#EA4335" />
          <stop offset="100%" stopColor="#EA4335" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`gem-b-${idSuffix}`} cx="86%" cy="50%" r="58%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#4285F4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`gem-y-${idSuffix}`} cx="50%" cy="88%" r="55%">
          <stop offset="0%" stopColor="#FBBC04" />
          <stop offset="100%" stopColor="#FBBC04" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`gem-g-${idSuffix}`} cx="14%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#34A853" />
          <stop offset="100%" stopColor="#34A853" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M12 1.2C12 7.7 16.3 12 22.8 12C16.3 12 12 16.3 12 22.8C12 16.3 7.7 12 1.2 12C7.7 12 12 7.7 12 1.2Z"
        fill="#4285F4"
      />
      <path
        d="M12 1.2C12 7.7 16.3 12 22.8 12C16.3 12 12 16.3 12 22.8C12 16.3 7.7 12 1.2 12C7.7 12 12 7.7 12 1.2Z"
        fill={`url(#gem-r-${idSuffix})`}
      />
      <path
        d="M12 1.2C12 7.7 16.3 12 22.8 12C16.3 12 12 16.3 12 22.8C12 16.3 7.7 12 1.2 12C7.7 12 12 7.7 12 1.2Z"
        fill={`url(#gem-y-${idSuffix})`}
      />
      <path
        d="M12 1.2C12 7.7 16.3 12 22.8 12C16.3 12 12 16.3 12 22.8C12 16.3 7.7 12 1.2 12C7.7 12 12 7.7 12 1.2Z"
        fill={`url(#gem-g-${idSuffix})`}
      />
      <path
        d="M12 1.2C12 7.7 16.3 12 22.8 12C16.3 12 12 16.3 12 22.8C12 16.3 7.7 12 1.2 12C7.7 12 12 7.7 12 1.2Z"
        fill={`url(#gem-b-${idSuffix})`}
      />
    </svg>
  ),

  // شعار Strava الرسمي (اللقطة 00:09 - 00:10)
  Strava: ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 24 24" fill="white" className={className}>
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
    </svg>
  ),

  // أيقونة الدائرة الملونة في أقصى اليمين (اللقطة 00:09 - 00:10 عند offset +2)
  ColorWheel: () => (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center"
      style={{
        background:
          'conic-gradient(#EA4335 0deg 72deg, #FBBC04 72deg 144deg, #34A853 144deg 216deg, #4285F4 216deg 288deg, #A142F4 288deg 360deg)',
      }}
    >
      <div className="w-3.5 h-3.5 bg-white rounded-full" />
    </div>
  ),

  // مؤشر التحميل الدوار بنمط iOS (8 خطوط) مطابق للقطة 00:07
  IOSSpinner: () => (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.85, ease: "linear" }}
      viewBox="0 0 24 24"
      className="w-[17px] h-[17px] text-white"
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={angle}
          x1="12"
          y1="3.2"
          x2="12"
          y2="7.2"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity={0.2 + (i / 8) * 0.8}
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </motion.svg>
  ),
};

// ============================================================================
// 2. مصفوفة الشركات الـ 9 في الشريط العلوي (بحيث يظهر دائماً 5 شركات في كل لقطة)
// ============================================================================
// Frame 00:01 (activeIndex = 2 ChatGPT): Visible [-2: Perplexity, -1: Gmail, 0: ChatGPT, +1: Calendar, +2: Claude]
// Frame 00:02 (activeIndex = 3 Calendar): Visible [-2: Gmail, -1: ChatGPT, 0: Calendar, +1: Claude, +2: GitHub]
// Frame 00:09 (activeIndex = 5 GitHub):   Visible [-2: Calendar, -1: Claude, 0: GitHub, +1: Gemini, +2: Strava]
// Frame 00:10 (activeIndex = 6 Gemini):   Visible [-2: Claude, -1: GitHub, 0: Gemini, +1: Strava, +2: ColorWheel]
const CAROUSEL_ITEMS = [
  { id: 'perplexity', name: 'Perplexity', bg: 'bg-[#1FB8CD]', icon: <BrandIcons.Perplexity className="w-7 h-7" color="white" /> },
  { id: 'gmail', name: 'Gmail', bg: 'bg-white border border-gray-100', icon: <BrandIcons.Gmail className="w-7 h-7" /> },
  { id: 'chatgpt', name: 'ChatGPT', bg: 'bg-[#10A37F]', icon: <BrandIcons.ChatGPT className="w-8 h-8" color="white" /> },
  { id: 'calendar', name: 'Google Calendar', bg: 'bg-white border border-gray-100', icon: <BrandIcons.GoogleCalendar className="w-9 h-9" /> },
  { id: 'claude', name: 'Claude', bg: 'bg-[#D97757]', icon: <BrandIcons.Claude className="w-7 h-7" color="white" /> },
  { id: 'github', name: 'GitHub', bg: 'bg-[#1F2328]', icon: <BrandIcons.GitHub className="w-8 h-8" /> },
  { id: 'gemini', name: 'Gemini', bg: 'bg-white border border-gray-100', icon: <BrandIcons.Gemini className="w-8 h-8" idSuffix="carousel" /> },
  { id: 'strava', name: 'Strava', bg: 'bg-[#FC4C02]', icon: <BrandIcons.Strava className="w-7 h-7" /> },
  { id: 'wheel', name: 'Google Photos', bg: 'bg-white border border-gray-100', icon: <BrandIcons.ColorWheel /> },
];

// ============================================================================
// 3. شريط الأيقونات التفاعلي ذو الـ 5 عناصر المرئية (Exact 5-Slot 3D Carousel)
// ============================================================================
const FiveSlotCarousel = ({ activeIndex, setActiveIndex }) => {
  const dragStartX = useRef(null);

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX;
  };

  const handlePointerUp = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    if (endX !== undefined) {
      const deltaX = endX - dragStartX.current;
      if (Math.abs(deltaX) > 22) {
        if (deltaX < 0 && activeIndex < 6) {
          setActiveIndex(activeIndex + 1);
        } else if (deltaX > 0 && activeIndex > 2) {
          setActiveIndex(activeIndex - 1);
        }
      }
    }
    dragStartX.current = null;
  };

  return (
    <div
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchEnd={handlePointerUp}
      className="relative h-[92px] w-full flex items-center justify-center overflow-visible select-none cursor-grab active:cursor-grabbing"
    >
      {CAROUSEL_ITEMS.map((item, idx) => {
        const offset = idx - activeIndex;
        const absOffset = Math.abs(offset);

        // إظهار 5 عناصر بالضبط (-2, -1, 0, +1, +2) مع إخفاء البقية بنعومة
        if (absOffset > 3) return null;

        // القياسات المطابقة للقطات 00:01، 00:02، 00:09، 00:10
        const scale =
          offset === 0
            ? 1.0 // 76px
            : absOffset === 1
            ? 0.81 // ~61px
            : absOffset === 2
            ? 0.65 // ~49px
            : 0.45;

        const x =
          offset === 0
            ? 0
            : absOffset === 1
            ? offset * 56
            : absOffset === 2
            ? offset * 104
            : offset * 136;

        const zIndex = 30 - absOffset * 5;

        // التمويه الجانبي التدريجي كما في الفيديو (الأطراف +/-2 مموهة بقوة blur(5.5px))
        const blur =
          offset === 0
            ? 0
            : absOffset === 1
            ? 0.5
            : absOffset === 2
            ? 5.5
            : 9;

        const opacity =
          offset === 0
            ? 1
            : absOffset === 1
            ? 0.96
            : absOffset === 2
            ? 0.68
            : 0;

        return (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => {
              // الحفاظ على ملء الخانات الـ 5 دائماً (بين index 2 و index 6)
              const clampedIdx = Math.max(2, Math.min(6, idx));
              setActiveIndex(clampedIdx);
            }}
            initial={false}
            animate={{
              x,
              scale,
              zIndex,
              opacity,
              filter: `blur(${blur}px)`,
            }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 25,
              mass: 0.95,
            }}
            className={`absolute w-[76px] h-[76px] rounded-full flex items-center justify-center ${item.bg} ${
              offset === 0
                ? 'shadow-[0_10px_28px_rgba(0,0,0,0.14)] ring-[4px] ring-white'
                : 'shadow-[0_4px_12px_rgba(0,0,0,0.06)] ring-[2.5px] ring-white/95'
            } cursor-pointer focus:outline-none`}
            title={item.name}
          >
            {item.icon}
          </motion.button>
        );
      })}
    </div>
  );
};

// ============================================================================
// 4. المكون الرئيسي للتطبيق (App)
// ============================================================================
export default function App() {
  // إمكانية التبديل بين زاوية اللقطة في الفيديو (Bottom-Cropped) أو الهاتف الكامل (Full iPhone 17 Pro Max)
  const [frameMode, setFrameMode] = useState('video_crop'); // 'video_crop' | 'full_phone'
  // حالة فتح أو إغلاق النافذة السفلية (لمعاينة الشاشة الابتدائية والشريط السفلي)
  const [sheetOpen, setSheetOpen] = useState(true);
  // الشاشة داخل النافذة السفلية: 'list' (00:00-00:04 & 00:09-00:10) | 'connect' (00:05-00:08)
  const [sheetView, setSheetView] = useState('list');
  // التبويب النشط في الشريط السفلي للواجهة الابتدائية
  const [activeTab, setActiveTab] = useState('passport');

  // مؤشر الشركة المتمركزة في الشريط العلوي (2 = ChatGPT، 3 = Calendar، 5 = GitHub، 6 = Gemini)
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedApp, setSelectedApp] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [connectState, setConnectState] = useState('idle'); // 'idle' | 'loading' | 'connected'
  const [pressedRowId, setPressedRowId] = useState(null);
  const [sheetOpenKey, setSheetOpenKey] = useState(0);

  const [assistants, setAssistants] = useState([
    { id: 'chatgpt', name: 'ChatGPT', creator: 'OpenAI', connected: true, targetCarouselIdx: 2 },
    { id: 'claude', name: 'Claude', creator: 'Anthropic', connected: true, targetCarouselIdx: 4 },
    { id: 'gemini', name: 'Gemini', creator: 'Google', connected: false, targetCarouselIdx: 6 },
    { id: 'perplexity', name: 'Perplexity', creator: 'Perplexity', connected: false, targetCarouselIdx: 2 },
  ]);

  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  // الحركة الابتدائية المطابقة للقطات 00:00 -> 00:01 -> 00:02:
  // يبدأ الشريط عند ChatGPT (2) في 00:00-00:01، ثم ينتقل خطوة واحدة إلى Google Calendar (3) في 00:02 ويستقر!
  useEffect(() => {
    const t = setTimeout(() => {
      setActiveIndex(3); // Google Calendar (31) في المنتصف كما في 00:02 - 00:04
    }, 1300);
    timersRef.current.push(t);
    return () => clearAllTimers();
  }, []);

  // عند اختيار تطبيق من القائمة (مثل Gemini في 00:04 -> 00:05)
  const handleSelectAssistant = (item) => {
    clearAllTimers();
    setPressedRowId(item.id);

    const t = setTimeout(() => {
      setPressedRowId(null);
      setSelectedApp(item);
      setConnectState('idle');
      setSheetView('connect');
    }, 130);
    timersRef.current.push(t);
  };

  // عند الضغط على "Continue to Gemini" (يطابق اللقطات 00:06 -> 00:07 -> 00:08 -> 00:09 -> 00:10)
  const handleContinueConnect = () => {
    if (connectState !== 'idle' || !selectedApp) return;
    clearAllTimers();

    // اللقطة 00:07: ظهور مؤشر التحميل الدوار بجانب Continue to Gemini
    setConnectState('loading');

    const t1 = setTimeout(() => {
      // اللقطة 00:08: تحول الدائرة الوسطى للأخضر مع علامة صح وتحول الزر إلى Connected
      setConnectState('connected');
      setAssistants((prev) =>
        prev.map((a) => (a.id === selectedApp.id ? { ...a, connected: true } : a))
      );

      // اللقطة 00:09 -> 00:10: العودة لشاشة القائمة، يبدأ الشريط عند GitHub (5) ثم ينزلق فوراً إلى Gemini (6)
      const t2 = setTimeout(() => {
        const finalIdx = selectedApp.targetCarouselIdx ?? 6;
        const preIdx = finalIdx > 2 ? finalIdx - 1 : finalIdx + 1;

        setActiveIndex(preIdx); // اللقطة 00:09: GitHub (5) في المنتصف
        setSheetView('list');

        const t3 = setTimeout(() => {
          setActiveIndex(finalIdx); // اللقطة 00:10: ينزلق إلى Gemini (6) في المنتصف
        }, 480);
        timersRef.current.push(t3);
      }, 950);

      timersRef.current.push(t2);
    }, 1050);

    timersRef.current.push(t1);
  };

  // فتح النافذة السفلية من الشاشة الابتدائية مع تشغيل حركة الدخول الضبابية (00:00 -> 00:02)
  const handleOpenSheetFromHome = () => {
    clearAllTimers();
    setSheetView('list');
    setActiveIndex(2); // يبدأ عند ChatGPT
    setSheetOpenKey((k) => k + 1);
    setSheetOpen(true);

    const t = setTimeout(() => {
      setActiveIndex(3); // يتحرك خطوة إلى Google Calendar
    }, 1250);
    timersRef.current.push(t);
  };

  // إعادة الضبط لبداية الفيديو (00:00)
  const handleReset = () => {
    clearAllTimers();
    setAssistants([
      { id: 'chatgpt', name: 'ChatGPT', creator: 'OpenAI', connected: true, targetCarouselIdx: 2 },
      { id: 'claude', name: 'Claude', creator: 'Anthropic', connected: true, targetCarouselIdx: 4 },
      { id: 'gemini', name: 'Gemini', creator: 'Google', connected: false, targetCarouselIdx: 6 },
      { id: 'perplexity', name: 'Perplexity', creator: 'Perplexity', connected: false, targetCarouselIdx: 2 },
    ]);
    setSearchQuery('');
    setConnectState('idle');
    setSheetOpen(true);
    setSheetView('list');
    setActiveIndex(2);
    setSheetOpenKey((k) => k + 1);

    const t = setTimeout(() => {
      setActiveIndex(3);
    }, 1250);
    timersRef.current.push(t);
  };

  // تشغيل تسلسل الفيديو الكامل تلقائياً من 00:00 إلى 00:10 بالثانية
  const handlePlayExactVideoTimeline = () => {
    clearAllTimers();
    setAssistants([
      { id: 'chatgpt', name: 'ChatGPT', creator: 'OpenAI', connected: true, targetCarouselIdx: 2 },
      { id: 'claude', name: 'Claude', creator: 'Anthropic', connected: true, targetCarouselIdx: 4 },
      { id: 'gemini', name: 'Gemini', creator: 'Google', connected: false, targetCarouselIdx: 6 },
      { id: 'perplexity', name: 'Perplexity', creator: 'Perplexity', connected: false, targetCarouselIdx: 2 },
    ]);
    setSearchQuery('');
    setConnectState('idle');
    setSheetOpen(true);
    setSheetView('list');
    setActiveIndex(2); // 00:00 - 00:01: ChatGPT
    setSheetOpenKey((k) => k + 1);

    // 00:01.4 -> 00:02: ينزلق الشريط خطوة واحدة إلى Google Calendar (3)
    const t1 = setTimeout(() => setActiveIndex(3), 1350);

    // 00:04.5 -> 00:05: نقرة على صف Gemini وفتح نافذة Connect Gemini مع الموشن الضبابي
    const t2 = setTimeout(() => {
      const geminiItem = {
        id: 'gemini',
        name: 'Gemini',
        creator: 'Google',
        connected: false,
        targetCarouselIdx: 6,
      };
      setPressedRowId('gemini');
      const t2b = setTimeout(() => {
        setPressedRowId(null);
        setSelectedApp(geminiItem);
        setConnectState('idle');
        setSheetView('connect');
      }, 150);
      timersRef.current.push(t2b);
    }, 3400);

    // 00:06.8 -> 00:07: نقرة على Continue to Gemini وظهور الـ Spinner
    const t3 = setTimeout(() => {
      setConnectState('loading');
    }, 5200);

    // 00:08: تحول إلى Connected والدائرة الخضراء مع علامة الصح
    const t4 = setTimeout(() => {
      setConnectState('connected');
      setAssistants((prev) =>
        prev.map((a) => (a.id === 'gemini' ? { ...a, connected: true } : a))
      );
    }, 6300);

    // 00:09: العودة إلى القائمة الرئيسية والشريط عند GitHub (5)
    const t5 = setTimeout(() => {
      setActiveIndex(5);
      setSheetView('list');
    }, 7300);

    // 00:10: انزلاق الشريط إلى Gemini (6)
    const t6 = setTimeout(() => {
      setActiveIndex(6);
    }, 7850);

    timersRef.current.push(t1, t2, t3, t4, t5, t6);
  };

  const renderAssistantListIcon = (id) => {
    switch (id) {
      case 'chatgpt':
        return <BrandIcons.ChatGPT className="w-[21px] h-[21px]" color="#111827" />;
      case 'claude':
        return <BrandIcons.Claude className="w-[21px] h-[21px]" color="#D97757" />;
      case 'gemini':
        return <BrandIcons.Gemini className="w-[21px] h-[21px]" idSuffix="row" />;
      case 'perplexity':
        return <BrandIcons.Perplexity className="w-[20px] h-[20px]" color="#1FB8CD" />;
      default:
        return null;
    }
  };

  const connectedCount = assistants.filter((a) => a.connected).length;

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col items-center justify-center p-4 font-sans antialiased select-none overflow-x-hidden">
      {/* إخفاء أشرطة التمرير نهائياً */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .no-scrollbar,
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* ================= شريط أدوات المعاينة العلوي ================= */}
      <div className="z-30 mb-4 flex flex-wrap items-center justify-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200/80 text-xs">
        <button
          onClick={() => setSheetOpen((v) => !v)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition cursor-pointer ${
            !sheetOpen
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200/80'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{sheetOpen ? 'عرض الواجهة الابتدائية والشريط السفلي' : 'فتح نافذة Connect your world'}</span>
        </button>

        <div className="h-4 w-[1px] bg-gray-200" />

        <button
          onClick={() =>
            setFrameMode((m) => (m === 'video_crop' ? 'full_phone' : 'video_crop'))
          }
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200/80 text-gray-700 font-medium transition cursor-pointer"
        >
          {frameMode === 'video_crop' ? (
            <>
              <Maximize2 className="w-3.5 h-3.5 text-gray-600" />
              <span>إظهار iPhone 17 Pro Max كاملاً</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5 text-gray-600" />
              <span>زاوية لقطة الفيديو المقربة</span>
            </>
          )}
        </button>

        <div className="h-4 w-[1px] bg-gray-200" />

        <button
          onClick={handleReset}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>إعادة ضبط</span>
        </button>

        <button
          onClick={handlePlayExactVideoTimeline}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141416] text-white font-medium hover:bg-black transition cursor-pointer shadow-xs"
        >
          <Play className="w-3 h-3 fill-white" />
          <span>تشغيل سيناريو الفيديو (00:00 - 00:10)</span>
        </button>
      </div>

      {/* =====================================================================
          موك أب iPhone 17 Pro Max الواقعي (Titanium Hardware Bezel + Buttons)
         ===================================================================== */}
      <div
        className={`relative transition-all duration-500 flex items-center justify-center ${
          frameMode === 'video_crop'
            ? 'h-[710px] overflow-hidden pt-2 pb-10 px-6'
            : 'py-2 px-6'
        }`}
      >
        {/* هيكل iPhone 17 Pro Max الخارجي */}
        <div
          className={`relative w-[404px] h-[828px] rounded-[66px] p-[3.5px] bg-gradient-to-b from-[#7C7E84] via-[#45474C] to-[#28292D] shadow-[0_38px_90px_-15px_rgba(0,0,0,0.34),0_12px_36px_-8px_rgba(0,0,0,0.22)] transition-transform duration-500 ${
            frameMode === 'video_crop' ? '-mt-[168px]' : 'mt-0'
          }`}
        >
          {/* الأزرار الجانبية الفيزيائية لـ iPhone 17 Pro Max (الجانب الأيسر: Action + Volume) */}
          <div className="absolute -left-[3px] top-[155px] w-[3px] h-[30px] bg-gradient-to-b from-[#6E7076] to-[#3A3B40] rounded-l-md shadow-xs" />
          <div className="absolute -left-[3px] top-[205px] w-[3px] h-[58px] bg-gradient-to-b from-[#6E7076] to-[#3A3B40] rounded-l-md shadow-xs" />
          <div className="absolute -left-[3px] top-[276px] w-[3px] h-[58px] bg-gradient-to-b from-[#6E7076] to-[#3A3B40] rounded-l-md shadow-xs" />

          {/* الأزرار الجانبية الفيزيائية (الجانب الأيمن: Power + Camera Control) */}
          <div className="absolute -right-[3px] top-[220px] w-[3px] h-[84px] bg-gradient-to-b from-[#6E7076] to-[#3A3B40] rounded-r-md shadow-xs" />
          <div className="absolute -right-[2.5px] top-[510px] w-[2.5px] h-[48px] bg-gradient-to-b from-[#55575C] to-[#2E3034] rounded-r-sm opacity-90" />

          {/* الحافة السوداء الداخلية للشاشة (Ultra-thin Bezel) */}
          <div className="relative w-full h-full bg-[#0B0B0D] rounded-[62.5px] p-[9px] shadow-inner">
            {/* لمعة زجاج الحافة الداخلية */}
            <div className="pointer-events-none absolute inset-[9px] rounded-[53.5px] ring-1 ring-white/15 z-50" />

            {/* ================= شاشة العرض الداخلية (iOS Screen) ================= */}
            <div className="relative w-full h-full bg-[#ECEFF4] rounded-[53.5px] overflow-hidden flex flex-col justify-between">
              
              {/* شريط الحالة العلوي + Dynamic Island */}
              <div className="relative z-30 pt-3.5 px-7 flex items-center justify-between text-[13px] font-semibold text-gray-900 select-none">
                <span className="tracking-tight pl-1">9:41</span>
                {/* الجزيرة التفاعلية Dynamic Island */}
                <div className="w-[116px] h-[33px] bg-black rounded-full flex items-center justify-between px-3 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a2e] ring-1 ring-white/10" />
                  <div className="w-3 h-3 rounded-full bg-[#0f172a] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pr-1 text-gray-900">
                  <Signal className="w-3.5 h-3.5 stroke-[2.4]" />
                  <Wifi className="w-3.5 h-3.5 stroke-[2.4]" />
                  <Battery className="w-4 h-4 stroke-[2.2]" />
                </div>
              </div>

              {/* =================================================================
                  الطبقة 1: الواجهة الابتدائية التفاعلية (AI Passport Home Screen)
                  تتحول إلى ضبابية (blur) تلقائياً عند ارتفاع النافذة السفلية كما في الفيديو
                 ================================================================= */}
              <motion.div
                animate={{
                  filter: sheetOpen ? 'blur(3.2px)' : 'blur(0px)',
                  scale: sheetOpen ? 0.99 : 1,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => {
                  if (sheetOpen) setSheetOpen(false);
                }}
                className="flex-1 flex flex-col justify-between px-4 pt-3 pb-6 overflow-hidden cursor-pointer"
              >
                <div>
                  {/* البطاقة الزرقاء العلوية (Aditya S. - AI Passport) المطابقة لأعلى لقطات الفيديو */}
                  <motion.div
                    whileHover={!sheetOpen ? { scale: 1.01 } : {}}
                    className="relative w-full h-[182px] rounded-[28px] bg-gradient-to-br from-[#2B6CB0] via-[#1D4ED8] to-[#173A7A] p-5 text-white shadow-[0_14px_32px_rgba(29,78,216,0.28)] flex flex-col justify-between overflow-hidden"
                  >
                    {/* إضاءات خلفية في البطاقة الزرقاء */}
                    <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-blue-400/25 blur-xl pointer-events-none" />
                    <div className="absolute bottom-0 left-8 w-48 h-16 rounded-full bg-indigo-950/40 blur-lg pointer-events-none" />

                    {/* الصف العلوي في البطاقة */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center">
                          <BrandIcons.Passport className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-100">
                          AI PASSPORT
                        </span>
                      </div>
                      <span className="text-[10.5px] font-medium text-blue-100/80 bg-white/10 px-2.5 py-0.5 rounded-full">
                        Verified Identity
                      </span>
                    </div>

                    {/* معلومات Aditya S. و Passport no. (تظهر في أعلى الفيديو 00:00 - 00:10) */}
                    <div className="z-10 mt-2">
                      <div className="flex justify-between items-center text-[11px] text-blue-200/85 font-medium">
                        <span>Name</span>
                        <span>Passport no.</span>
                      </div>
                      <div className="flex justify-between items-baseline mt-0.5">
                        <div className="text-[22px] font-bold tracking-tight text-white">
                          Aditya S.
                        </div>
                        <div className="text-[12px] text-blue-100 font-medium tracking-tight">
                          #001248 <span className="opacity-70">· Oct 2026</span>
                        </div>
                      </div>
                    </div>

                    {/* الشريط السفلي داخل البطاقة الزرقاء */}
                    <div className="z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-blue-100/90">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {connectedCount} AI tools synced
                      </span>
                      <span className="opacity-75">Universal Context v2.4</span>
                    </div>
                  </motion.div>

                  {/* قسم Quick access (يظهر مباشرة تحت البطاقة الزرقاء في الفيديو) */}
                  <div className="mt-5 px-1">
                    <div className="flex items-center justify-between mb-2.5">
                      <h3 className="text-[14px] font-semibold text-gray-800 tracking-tight">
                        Quick access
                      </h3>
                      <span className="text-[11.5px] font-medium text-blue-600">
                        Manage all
                      </span>
                    </div>

                    {/* بطاقات الوصول السريع التفاعلية */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenSheetFromHome();
                        }}
                        className="bg-white p-3.5 rounded-[22px] shadow-xs border border-gray-200/60 text-left hover:border-blue-300 transition flex flex-col justify-between h-[108px] cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            <div className="w-7 h-7 rounded-full bg-[#10A37F] flex items-center justify-center ring-2 ring-white">
                              <BrandIcons.ChatGPT className="w-4 h-4" />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-[#D97757] flex items-center justify-center ring-2 ring-white">
                              <BrandIcons.Claude className="w-4 h-4" />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center ring-2 ring-white">
                              <BrandIcons.Gemini className="w-4 h-4" idSuffix="quick" />
                            </div>
                          </div>
                          <span className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition">
                            <Plus className="w-3.5 h-3.5" />
                          </span>
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-gray-900">
                            Connect world
                          </div>
                          <div className="text-[11px] text-gray-400">
                            {connectedCount} active connectors
                          </div>
                        </div>
                      </button>

                      <div className="bg-white p-3.5 rounded-[22px] shadow-xs border border-gray-200/60 text-left flex flex-col justify-between h-[108px]">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <span className="text-[10.5px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                            Private
                          </span>
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-gray-900">
                            Memory Vault
                          </div>
                          <div className="text-[11px] text-gray-400">
                            End-to-end encrypted
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* بطاقة نشاط السياق الذكي */}
                    <div className="mt-3 bg-white rounded-[22px] p-3.5 shadow-xs border border-gray-200/60">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12px] font-semibold text-gray-700 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          Recent Passport Context
                        </span>
                        <span className="text-[11px] text-gray-400">Just now</span>
                      </div>
                      <div className="space-y-2">
                        {assistants
                          .filter((a) => a.connected)
                          .map((app) => (
                            <div
                              key={app.id}
                              className="flex items-center justify-between text-[12px] py-1 border-b border-gray-50 last:border-0"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
                                  {renderAssistantListIcon(app.id)}
                                </div>
                                <span className="font-medium text-gray-800">
                                  {app.name}
                                </span>
                              </div>
                              <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Synced
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= الشريط السفلي للواجهة الابتدائية (Bottom Navigation Bar) ================= */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mt-auto bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-[26px] px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-around"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab('home')}
                    className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition cursor-pointer ${
                      activeTab === 'home' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Home className="w-[19px] h-[19px]" />
                    <span className="text-[10px] font-medium">Home</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('passport')}
                    className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition cursor-pointer ${
                      activeTab === 'passport' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <CreditCard className="w-[19px] h-[19px]" />
                    <span className="text-[10px] font-medium">Passport</span>
                  </button>

                  {/* زر فتح نافذة Connect your world من الشريط السفلي */}
                  <button
                    type="button"
                    onClick={handleOpenSheetFromHome}
                    className="flex items-center gap-1.5 bg-[#141416] text-white px-3.5 py-2 rounded-2xl shadow-sm hover:bg-black transition cursor-pointer"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                    <span className="text-[11.5px] font-semibold">Connect</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('settings')}
                    className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition cursor-pointer ${
                      activeTab === 'settings' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <SlidersHorizontal className="w-[19px] h-[19px]" />
                    <span className="text-[10px] font-medium">Settings</span>
                  </button>
                </div>
              </motion.div>

              {/* زر عائم صغير عند إغلاق النافذة السفلية لإعادة رفعها بلمسة واحدة */}
              <AnimatePresence>
                {!sheetOpen && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={handleOpenSheetFromHome}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 cursor-pointer hover:bg-blue-700 transition"
                  >
                    <ChevronUp className="w-4 h-4" />
                    <span>رفع نافذة Connect your world</span>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* =================================================================
                  الطبقة 2: النافذة السفلية البيضاء (Connect Your World Bottom Sheet)
                  تطابق الأبعاد والزوايا والموشن في اللقطات 00:00 -> 00:10
                 ================================================================= */}
              <AnimatePresence>
                {sheetOpen && (
                  <motion.div
                    key="bottom-sheet"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '105%' }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 29,
                    }}
                    className="absolute inset-x-0 bottom-0 z-20 bg-white rounded-t-[40px] pt-6 px-5 pb-6 h-[596px] shadow-[0_-14px_45px_rgba(0,0,0,0.08)] flex flex-col justify-between overflow-hidden no-scrollbar"
                  >
                    <AnimatePresence mode="wait">
                      {sheetView === 'list' ? (
                        /* =========================================================
                           الشاشة 1: قائمة الشركات (00:00 -> 00:04 و 00:09 -> 00:10)
                           موشن الدخول: ChatGPT والعنوان يتضحان أولاً (00:00) ثم البحث والقائمة (00:01)
                           ========================================================= */
                        <motion.div
                          key={`sheet-list-${sheetOpenKey}`}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{
                            opacity: 0,
                            filter: 'blur(12px)',
                            transition: { duration: 0.18 },
                          }}
                          className="flex flex-col h-full no-scrollbar overflow-hidden"
                        >
                          {/* 1. شريط الشركات الـ 5 المتداخلة */}
                          <motion.div
                            initial={{ opacity: 0.55, filter: 'blur(9px)', scale: 0.97 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <FiveSlotCarousel
                              activeIndex={activeIndex}
                              setActiveIndex={setActiveIndex}
                            />
                          </motion.div>

                          {/* 2. العنوان والوصف (في 00:00 العنوان ظاهر بنصف شفافية والوصف مموه بـ blur) */}
                          <div className="text-center mt-2.5 mb-5">
                            <motion.h1
                              initial={{ opacity: 0.45, filter: 'blur(2.5px)', y: 3 }}
                              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                              transition={{
                                duration: 0.38,
                                delay: 0.04,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="text-[22px] font-semibold text-[#111827] tracking-[-0.02em]"
                            >
                              Connect your world
                            </motion.h1>

                            <motion.p
                              initial={{ opacity: 0.12, filter: 'blur(8px)', y: 5 }}
                              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                              transition={{
                                duration: 0.45,
                                delay: 0.12,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="text-[14px] text-[#8E9299] mt-1 leading-[1.42] max-w-[260px] mx-auto font-normal"
                            >
                              Bring in the AI tools and apps your Passport can learn from.
                            </motion.p>
                          </div>

                          {/* 3. حقل البحث Search connectors */}
                          <motion.div
                            initial={{ opacity: 0, filter: 'blur(12px)', y: 8 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{
                              duration: 0.46,
                              delay: 0.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative mb-5"
                          >
                            <Search className="w-[15px] h-[15px] text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Search connectors"
                              className="w-full pl-9 pr-4 py-[11px] bg-white border border-[#E5E7EB] rounded-[14px] text-[14px] text-gray-800 placeholder-[#9CA3AF] focus:outline-none focus:border-gray-300 transition shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                            />
                          </motion.div>

                          {/* 4. قسم AI assistants (يظهر صف Perplexity مقطوعاً جزئياً بالأسفل تماماً كما في اللقطات 00:01-00:04) */}
                          <motion.div
                            initial={{ opacity: 0, filter: 'blur(14px)', y: 10 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{
                              duration: 0.48,
                              delay: 0.27,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex-1 flex flex-col min-h-0 no-scrollbar overflow-hidden"
                          >
                            <div className="text-[12.5px] font-medium text-[#9CA3AF] mb-2 px-0.5">
                              AI assistants
                            </div>

                            <div className="border border-[#E5E7EB]/90 rounded-[22px] divide-y divide-[#F3F4F6] bg-white overflow-y-auto no-scrollbar shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                              {assistants
                                .filter(
                                  (a) =>
                                    a.name
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase()) ||
                                    a.creator
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase())
                                )
                                .map((item) => {
                                  const isPressed = pressedRowId === item.id;
                                  return (
                                    <motion.div
                                      key={item.id}
                                      whileTap={{ scale: 0.985 }}
                                      onClick={() => handleSelectAssistant(item)}
                                      className={`flex items-center justify-between px-4 py-[13.5px] transition-colors cursor-pointer ${
                                        isPressed
                                          ? 'bg-[#F3F4F6]'
                                          : 'hover:bg-[#F9FAFB] active:bg-[#F3F4F6]'
                                      }`}
                                    >
                                      <div className="flex items-center gap-3.5">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#F8F9FA] border border-[#F1F3F5] flex items-center justify-center shrink-0">
                                          {renderAssistantListIcon(item.id)}
                                        </div>
                                        <div>
                                          <div className="text-[14.5px] font-medium text-[#111827] leading-snug">
                                            {item.name}
                                          </div>
                                          <div className="text-[12.5px] text-[#9CA3AF] leading-tight mt-0.5">
                                            {item.creator}
                                          </div>
                                        </div>
                                      </div>

                                      {item.connected ? (
                                        <motion.div
                                          initial={{ opacity: 0, scale: 0.92 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          className="flex items-center gap-1.5 text-[13px] text-[#8E9299] font-normal pr-0.5"
                                        >
                                          <span className="w-[7px] h-[7px] rounded-full bg-[#10B981]" />
                                          <span>Connected</span>
                                        </motion.div>
                                      ) : (
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleSelectAssistant(item);
                                          }}
                                          className="w-7 h-7 flex items-center justify-center text-[#374151] hover:bg-gray-100 rounded-full transition"
                                        >
                                          <Plus className="w-[18px] h-[18px] stroke-[1.8]" />
                                        </button>
                                      )}
                                    </motion.div>
                                  );
                                })}
                            </div>
                          </motion.div>
                        </motion.div>
                      ) : (
                        /* =========================================================
                           الشاشة 2: نافذة ربط الشركة (00:05 -> 00:08)
                           موشن مطابق 100% للقطة 00:05 -> 00:06:
                           - الشعاران العلويان والعنوان "Connect Gemini" يظهران واضحين فوراً في 00:05
                           - بطاقة الخطوات (1,2,3) والأزرار السفلية تبدأ في مكانها مموهة بشدة blur(14px)
                             ثم تتضح تدريجياً إلى blur(0px) في 00:06 بدون إزاحة جانبية
                           ========================================================= */
                        <motion.div
                          key={`sheet-connect-${selectedApp?.id || 'gemini'}`}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{
                            opacity: 0,
                            filter: 'blur(12px)',
                            transition: { duration: 0.2 },
                          }}
                          className="flex flex-col justify-between h-full pt-2 pb-1 no-scrollbar overflow-hidden"
                        >
                          <div>
                            {/* 1. الشعاران العلويان (Passport <-> Gemini) واضحان فوراً في 00:05 */}
                            <motion.div
                              initial={{ opacity: 0.85, filter: 'blur(2px)', scale: 0.98 }}
                              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="flex items-center justify-center my-2.5"
                            >
                              {/* دائرة AI Passport السوداء */}
                              <div className="w-[62px] h-[62px] rounded-full bg-[#18181B] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.14)] z-10">
                                <BrandIcons.Passport className="w-8 h-8" />
                              </div>

                              {/* خط التوصيل الأفقي والدائرة الوسطى */}
                              <div className="relative flex items-center justify-center w-[58px]">
                                <motion.div
                                  animate={{
                                    backgroundColor:
                                      connectState === 'connected'
                                        ? '#10B981'
                                        : '#E5E7EB',
                                  }}
                                  transition={{ duration: 0.3 }}
                                  className="w-full h-[1.5px]"
                                />
                                <motion.div
                                  initial={false}
                                  animate={{
                                    width: connectState === 'connected' ? 22 : 14,
                                    height: connectState === 'connected' ? 22 : 14,
                                    backgroundColor:
                                      connectState === 'connected'
                                        ? '#10B981'
                                        : '#FFFFFF',
                                    borderColor:
                                      connectState === 'connected'
                                        ? '#10B981'
                                        : '#D1D5DB',
                                    scale:
                                      connectState === 'connected' ? [1, 1.22, 1] : 1,
                                  }}
                                  transition={{ duration: 0.32, ease: 'easeOut' }}
                                  className="absolute rounded-full border-[1.5px] flex items-center justify-center shadow-2xs"
                                >
                                  <AnimatePresence>
                                    {connectState === 'connected' && (
                                      <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{
                                          type: 'spring',
                                          stiffness: 380,
                                          damping: 18,
                                        }}
                                      >
                                        <Check className="w-3 h-3 text-white stroke-[3]" />
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              </div>

                              {/* دائرة الشركة المختارة (Gemini) */}
                              <div className="w-[62px] h-[62px] rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.07)] z-10">
                                {selectedApp?.id === 'chatgpt' ? (
                                  <BrandIcons.ChatGPT
                                    className="w-8 h-8"
                                    color="#10A37F"
                                  />
                                ) : selectedApp?.id === 'claude' ? (
                                  <BrandIcons.Claude
                                    className="w-8 h-8"
                                    color="#D97757"
                                  />
                                ) : selectedApp?.id === 'perplexity' ? (
                                  <BrandIcons.Perplexity
                                    className="w-7 h-7"
                                    color="#1FB8CD"
                                  />
                                ) : (
                                  <BrandIcons.Gemini
                                    className="w-8 h-8"
                                    idSuffix="modal"
                                  />
                                )}
                              </div>
                            </motion.div>

                            {/* 2. العنوان والوصف (واضح في 00:05 مع نعومة طفيفة جداً في الوصف) */}
                            <div className="text-center mt-5 mb-6">
                              <motion.h2
                                initial={{ opacity: 0.85, filter: 'blur(1.5px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.28 }}
                                className="text-[22px] font-semibold text-[#111827] tracking-[-0.02em]"
                              >
                                Connect {selectedApp?.name || 'Gemini'}
                              </motion.h2>
                              <motion.p
                                initial={{ opacity: 0.55, filter: 'blur(3.5px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.36, delay: 0.05 }}
                                className="text-[13.5px] text-[#8E9299] mt-1.5 leading-[1.45] px-2 font-normal"
                              >
                                {selectedApp?.name || 'Gemini'} adds AI Passport on its
                                side. It only reads what you allow, and you can
                                disconnect at any time.
                              </motion.p>
                            </div>

                            {/* 3. بطاقة الخطوات (1، 2، 3): في اللقطة 00:05 تكون في مكانها مموهة بـ blur(13px) ثم تتضح في 00:06 */}
                            <motion.div
                              initial={{
                                opacity: 0.42,
                                filter: 'blur(13px)',
                                y: 4,
                              }}
                              animate={{
                                opacity: 1,
                                filter: 'blur(0px)',
                                y: 0,
                              }}
                              transition={{
                                duration: 0.48,
                                delay: 0.14,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="bg-[#F8F9FA] border border-[#F1F3F5] rounded-[22px] p-4 space-y-4"
                            >
                              <div
                                onClick={handleContinueConnect}
                                className="flex items-center justify-between cursor-pointer group"
                              >
                                <div className="flex items-center gap-3.5">
                                  <span className="w-[24px] h-[24px] rounded-full bg-white border border-gray-200/80 text-[11.5px] font-medium text-[#6B7280] flex items-center justify-center shadow-2xs">
                                    1
                                  </span>
                                  <span className="text-[14px] text-[#374151]">
                                    Open AI Passport in{' '}
                                    <strong className="font-semibold text-[#111827]">
                                      {selectedApp?.name || 'Gemini'}
                                    </strong>
                                  </span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-[#9CA3AF] group-hover:text-gray-600 transition mr-0.5" />
                              </div>

                              <div className="flex items-center gap-3.5">
                                <span className="w-[24px] h-[24px] rounded-full bg-white border border-gray-200/80 text-[11.5px] font-medium text-[#6B7280] flex items-center justify-center shadow-2xs">
                                  2
                                </span>
                                <span className="text-[14px] text-[#374151]">
                                  Choose Connect and sign in
                                </span>
                              </div>

                              <div className="flex items-center gap-3.5">
                                <span className="w-[24px] h-[24px] rounded-full bg-white border border-gray-200/80 text-[11.5px] font-medium text-[#6B7280] flex items-center justify-center shadow-2xs">
                                  3
                                </span>
                                <span className="text-[14px] text-[#374151]">
                                  Use AI Passport in a chat
                                </span>
                              </div>
                            </motion.div>
                          </div>

                          {/* 4. الأزرار السفلية (Continue to Gemini + Cancel): في 00:05 تكون في مكانها مموهة بـ blur(15px) ثم تتضح في 00:06 */}
                          <motion.div
                            initial={{
                              opacity: 0.35,
                              filter: 'blur(15px)',
                              y: 6,
                            }}
                            animate={{
                              opacity: 1,
                              filter: 'blur(0px)',
                              y: 0,
                            }}
                            transition={{
                              duration: 0.52,
                              delay: 0.22,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="space-y-3 pt-2"
                          >
                            <motion.button
                              type="button"
                              whileTap={{ scale: 0.985 }}
                              onClick={handleContinueConnect}
                              disabled={connectState !== 'idle'}
                              className="w-full h-[52px] rounded-[17px] bg-[#1C1C1E] text-white text-[15px] font-medium flex items-center justify-center gap-2.5 shadow-sm hover:bg-black transition cursor-pointer disabled:cursor-default"
                            >
                              <AnimatePresence mode="wait">
                                {connectState === 'idle' && (
                                  <motion.span
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.16 }}
                                  >
                                    Continue to {selectedApp?.name || 'Gemini'}
                                  </motion.span>
                                )}

                                {connectState === 'loading' && (
                                  <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.16 }}
                                    className="flex items-center gap-2.5"
                                  >
                                    <BrandIcons.IOSSpinner />
                                    <span>
                                      Continue to {selectedApp?.name || 'Gemini'}
                                    </span>
                                  </motion.div>
                                )}

                                {connectState === 'connected' && (
                                  <motion.span
                                    key="connected"
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="font-medium text-white"
                                  >
                                    Connected
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </motion.button>

                            <button
                              type="button"
                              onClick={() => {
                                clearAllTimers();
                                setSheetView('list');
                              }}
                              className="w-full py-1.5 text-[14.5px] font-medium text-[#111827] hover:text-gray-600 transition cursor-pointer"
                            >
                              Cancel
                            </button>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* شريط المؤشر السفلي لنظام iOS (Home Indicator Bar) */}
              <div className="pointer-events-none absolute bottom-[7px] left-1/2 -translate-x-1/2 z-40 w-[134px] h-[5px] rounded-full bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}