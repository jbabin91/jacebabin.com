import { createLazyFileRoute } from '@tanstack/react-router';
import { CodeBlock, monokai } from 'react-code-blocks';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto my-0 p-8 text-center">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-5xl font-semibold">
          Welcome to my portfolio <span>👋🏻</span>
        </h1>
        <div className="flex justify-center text-start">
          <CodeBlock
            language="typescript"
            text={`const person = {
    firstName: 'Jace',
    lastName: 'Babin',
    role: 'Software Engineer II',
    city: 'Phoenix',
    state: 'Arizona',
}`}
            theme={monokai}
          />
        </div>
      </div>
    </div>
  );
}
