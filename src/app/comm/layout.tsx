import BaseFrame from '@/shared/@common/ui/baseFrame/BaseFrame';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <BaseFrame>{children}</BaseFrame>;
};

export default Layout;
