import { Button } from "@/components/ui/Button";

export function MapControls() {
  return (
    <div className="fixed bottom-4 right-4 z-20 flex flex-wrap justify-end gap-2">
      <Button href="/projects" variant="primary">
        View all projects
      </Button>
    </div>
  );
}
