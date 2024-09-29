import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <div className="">
      <Container className="py-6 text-center">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <ButtonLink href="/" variant={'filled'} color={'primary'}>
          Return Home
        </ButtonLink>
      </Container>
    </div>
  );
}
