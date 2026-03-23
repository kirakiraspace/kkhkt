import { ComponentType } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}

export function ChatBubbleIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="9.5" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LightningIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 2L4.5 13.5h6L9 22l9.5-12.5h-6L13 2z" />
    </svg>
  );
}

export function TargetIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DiceIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2.5" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function HandshakeIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 11l3.5-3.5a2 2 0 0 1 2.83 0L17 11" />
      <path d="M2.5 13.5L7 9l2 2-3.5 3.5a1.5 1.5 0 0 1-2.12 0v0a1.5 1.5 0 0 1 0-2.12l.12.12z" />
      <path d="M21.5 13.5L17 9l-2 2 3.5 3.5a1.5 1.5 0 0 0 2.12 0v0a1.5 1.5 0 0 0 0-2.12l-.12.12z" />
      <path d="M12 17.5l-2-2" />
      <path d="M14 15.5l-2-2" />
    </svg>
  );
}

export function PartyPopperIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5.8 11.3L2 22l10.7-3.8" />
      <path d="M4 3v2" />
      <path d="M8 3l-1 2" />
      <path d="M3 8l2-1" />
      <path d="M15 4l-1.5 3" />
      <path d="M20 6l-3 1.5" />
      <path d="M18 12l2.5-1" />
      <circle cx="16" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="20" cy="3" r="1" fill="currentColor" stroke="none" />
      <circle cx="21" cy="10" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MonitorIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function SparklesIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    </svg>
  );
}

export function HeartIcon({ size = 24, className = '', filled = false }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function CheckIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ArrowLeftIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function SkipForwardIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" opacity="0.3" />
      <line x1="19" y1="5" x2="19" y2="19" />
    </svg>
  );
}

export function TrophyIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3" />
      <path d="M18 9h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3" />
      <path d="M6 4h12v6a6 6 0 0 1-12 0V4z" />
      <path d="M9 17h6" />
      <path d="M12 16v5" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function BookmarkIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function IceCubeIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="6" width="16" height="14" rx="3" fill="currentColor" opacity="0.15" />
      <rect x="4" y="6" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M10 6v14" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M7 3l-1 3M17 3l1 3M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="7" cy="13" r="0.6" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="8" r="0.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// Icon map for resolving string keys from config
export const ICON_MAP: Record<string, ComponentType<IconProps>> = {
  'chat-bubble': ChatBubbleIcon,
  'lightning': LightningIcon,
  'target': TargetIcon,
  'dice': DiceIcon,
  'briefcase': BriefcaseIcon,
  'handshake': HandshakeIcon,
  'party': PartyPopperIcon,
  'monitor': MonitorIcon,
  'sparkles': SparklesIcon,
  'heart': HeartIcon,
  'check': CheckIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'skip': SkipForwardIcon,
  'trophy': TrophyIcon,
  'bookmark': BookmarkIcon,
  'ice-cube': IceCubeIcon,
};

export function resolveIcon(key: string): ComponentType<IconProps> {
  return ICON_MAP[key] ?? ChatBubbleIcon;
}
