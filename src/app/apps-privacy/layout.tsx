import { AppLayout } from "@/components/layout/AppLayout"

export default function AuthenticatedGroupLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>
}
