export type LeadType = 'tester' | 'notification';

export interface LeadData {
  type: LeadType;
  name: string;
  email: string;
  message?: string;
}

export async function submitLead(data: LeadData): Promise<void> {
  // 실제 배포 시에는 이 URL을 사용자가 배포한 GAS URL로 교체해야 합니다.
  // 현재는 데모를 위해 로컬/가상 엔드포인트를 타겟팅합니다.
  const API_ENDPOINT = process.env.NEXT_PUBLIC_GAS_URL;

  if (!API_ENDPOINT) {
    console.warn('No GAS URL provided. Using mock submission.');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return;
  }

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors', // CORS 이슈 방지를 위해 no-cors 사용 (응답 본문은 읽을 수 없음)
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit lead');
  }
}
