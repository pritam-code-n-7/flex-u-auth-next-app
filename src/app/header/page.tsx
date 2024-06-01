import HeaderDemo from "@/components/HeaderDemo";

const Header: React.FC = () => {
  return (
    <div>
      <HeaderDemo />
      <div className="content">
        {/* Other page-specific content goes here */}
      </div>
    </div>
  );
};

export default Header;
