'use client';

import React, { useState } from 'react';
import { submitLead } from '@/lib/api';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'tester' | 'notification';
}

interface FormState {
  name: string;
  email: string;
  message?: string;
}

export default function LeadForm({ isOpen, onClose, type }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('submitting');

    // Validation
    if (!formData.name || !formData.email) {
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      await submitLead({
        type,
        ...formData,
      });
      setStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatus('idle');
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-brand-charcoal/40 hover:text-brand-charcoal transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-brand-charcoal">
              {type === 'tester' ? '체험단 신청하기' : '사전 알림 신청'}
            </h3>
            <p className="mt-2 text-sm text-brand-charcoal/60">
              {type === 'tester' 
                ? 'Shh-eat의 첫 번째 체험단이 되어 제품을 가장 먼저 경험해보세요.'
                : '새로운 소식을 가장 먼저 받아보실 수 있도록 알려드릴게요.'}
            </p>
          </div>

          {status === 'success' ? (
            <div className="py-12 text-center animate-in zoom-in duration-500">
              <div className="mb-4 text-5xl">🎉</div>
              <h4 className="text-xl font-bold text-brand-charcoal">신청이 완료되었습니다!</h4>
              <p className="mt-2 text-brand-charcoal/60">곧 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-1">이름</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full rounded-xl border border-brand-charcoal/10 bg-brand-ivory/50 px-4 py-3 focus:border-brand-corn focus:ring-2 focus:ring-brand-corn/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-1">이메일</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-brand-charcoal/10 bg-brand-ivory/50 px-4 py-3 focus:border-brand-corn focus:ring-2 focus:ring-brand-corn/20 outline-none transition-all"
                />
              </div>
              {type === 'tester' && (
                <div>
                  <label className="block text-sm font-medium text-brand-charcoal mb-1">하고 싶은 말 (선택)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Shh-eat에 기대하는 점을 적어주세요."
                    rows={3}
                    className="w-full rounded-xl border border-brand-charcoal/10 bg-brand-ivory/50 px-4 py-3 focus:border-brand-corn focus:ring-2 focus:ring-brand-corn/20 outline-none transition-all resize-none"
                  />
                </div>
              )}

              {status === 'error' && (
                <p className="text-sm text-red-500">모든 필수 항목을 올바르게 입력해주세요.</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-brand-charcoal py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-brand-charcoal/90 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? '전송 중...' : '신청하기'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
