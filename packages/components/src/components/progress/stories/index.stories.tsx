import * as React from 'react';
import { Stack } from '../../../layout/stack';
import { Progress, ProgressIndicator, ProgressBar } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Progress',
  component: Progress,
};

export const Default: React.FC = () => {
  return (
    <Stack direction="vertical" spacing="$30">
      <ProgressBar value={50} />
      <ProgressBar color="green" value={20} />
      <ProgressBar color="red" value={80} />
      <ProgressBar color="yellow" value={100} />
    </Stack>
  );
};

export const Animated: React.FC = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress value={progress}>
      <ProgressIndicator color="blue" style={{ width: `${progress}%` }} />
    </Progress>
  );
};
