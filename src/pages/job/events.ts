import { useState } from 'react';
import { jobData } from './data';
import { useSwipeable } from 'react-swipeable';

export const useJob = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const totalPages = Math.ceil(jobData.length / itemsPerPage); // 총 페이지 수 계산

  const currentJobs = jobData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // 유효하지 않은 페이지일 경우 아무것도 하지 않음
    setCurrentPage(pageNumber); // 페이지 변경 시 상태 업데이트
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePageChange(currentPage + 1), // 왼쪽으로 스와이프하면 다음 페이지로
    onSwipedRight: () => handlePageChange(currentPage - 1), // 오른쪽으로 스와이프하면 이전 페이지로
    trackMouse: true, // 데스크탑에서도 마우스 스와이프 동작을 지원하도록
  });

  const handleBefore = () => {
    handlePageChange(currentPage - 1);
  };

  const handleAfter = () => {
    handlePageChange(currentPage + 1);
  };

  return {
    currentJobs,
    handlers,
    totalPages,
    currentPage,
    handlePageChange,
    handleBefore,
    handleAfter,
  };
};
