import JobBox from '../../components/job/JobBox';
import { JobContent, JobGrid, JobLayout, JobPaging, JobTop } from './styles';
import Paging from './Paging';
import { useJob } from './events';

export default function JobPage() {
  const { currentJobs, totalPages, handlers, currentPage, handlePageChange } = useJob();
  return (
    <JobLayout>
      <JobTop>
        <h2>이투에서 소개해드리는 오늘의 구인구직글입니다</h2>
        <h1>추천 구인구직</h1>
      </JobTop>
      <JobContent>
        <JobGrid {...handlers}>
          {currentJobs.map((job, index) => (
            <JobBox
              key={index}
              image={job.image}
              title={job.title}
              location={job.location}
              time={job.time}
            />
          ))}
        </JobGrid>
        <JobPaging>
          {Array.from({ length: totalPages }, (_, i) => (
            <Paging
              key={i}
              isActive={currentPage === i + 1}
              onClick={() => handlePageChange(i + 1)}
            />
          ))}
        </JobPaging>
      </JobContent>
    </JobLayout>
  );
}
