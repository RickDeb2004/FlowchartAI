import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function CollaborationPopover() {
  return (
    <div className="p-4">
        <h3 className="text-lg font-semibold">Collaborate and Annotate</h3>
        <p className="mt-2 text-sm text-gray-600">Share this diagram with your team:</p>
        <div className="mt-2">
            <Textarea placeholder="Add a message (optional)" />
        </div>
        <div className="mt-4">
            <Button variant="default">Share</Button>
        </div>
        <div className="mt-4">
            <h4 className="text-md font-semibold">Annotations</h4>
            <p className="mt-2 text-sm text-gray-600">Team members can add comments and annotations here.</p>
            {/* Annotation feature implementation here */}
        </div>
    </div>
  );
}
