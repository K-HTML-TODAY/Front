import JobBox from '../../components/job/JobBox';
import { JobContent, JobGrid, JobLayout, JobPaging, JobTop } from './styles';
import Paging from './Paging';
import { useJob } from './events';
import { ReactComponent as Before } from '../../assets/images/before.svg';
import { ReactComponent as After } from '../../assets/images/after.svg';

export default function JobAIPage() {
  const {
    currentJobs,
    totalPages,
    handlers,
    currentPage,
    handlePageChange,
    handleBefore,
    handleAfter,
  } = useJob();

  return (
    <JobLayout>
      <JobTop>
        <h2>이투 AI가 도와준 구직글 모음</h2>
        <h1>이투 인재모음</h1>
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
          <Before onClick={handleBefore} />
          {Array.from({ length: totalPages }, (_, i) => (
            <Paging
              key={i}
              isActive={currentPage === i + 1}
              onClick={() => handlePageChange(i + 1)}
            />
          ))}
          <After onClick={handleAfter} />
        </JobPaging>
      </JobContent>
    </JobLayout>
  );
}
