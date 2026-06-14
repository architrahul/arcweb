import { Button } from "@/components/ui/Button";

export function MapControls() {
  return (
    <div className="fixed bottom-4 left-4 z-20 flex flex-wrap gap-2">
      <Button href="/projects" variant="quiet">
        View all projects
      </Button>
    </div>
  );
}
