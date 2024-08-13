import { JobBoxContent, JobBoxLayout } from './styles';
import { JobBoxType } from './types';

export default function JobBox({ image, title, location, time }: JobBoxType) {
  return (
    <JobBoxLayout>
      <img src={image} />
      <JobBoxContent>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <h2>{time}</h2>
      </JobBoxContent>
    </JobBoxLayout>
  );
}
