const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 overflow-hidden">
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Authlayout;
