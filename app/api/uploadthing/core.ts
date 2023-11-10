import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "fakeId" });
 
export const ourFileRouter = {
  
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;