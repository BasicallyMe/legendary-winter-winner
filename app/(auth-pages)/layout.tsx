export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl max-h-dvh min-h-dvh h-dvh flex">
      <div className="flex-1"></div>
      {children}
    </div>
  );
}
