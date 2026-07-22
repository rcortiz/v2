const BrandStar = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M158.603 100c78.169 75.604 16.906 136.867-58.603 58.603C24.396 236.867-36.867 175.604 41.397 100-36.867 24.396 24.396-36.867 100 41.397 175.604-36.867 236.867 24.396 158.603 100"
      />
    </svg>
  );
};

export default BrandStar;
