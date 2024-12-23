"use client";

interface ContainerProps {
  children: React.ReactNode;
  hideOnLargeScreen?: boolean; // Optional prop to control visibility on large screens
}

const Container: React.FC<ContainerProps> = ({
  children,
  hideOnLargeScreen = false, // Default: show on all screens
}) => {
  // Conditionally apply classes or styles
  return (
    <div
      className={`max-w-[2520px] mx-auto ${
        hideOnLargeScreen ? "lg:hidden" : ""
      } xl:px-20 md:px-10 sm:px-2 px-4`}
    >
      {children}
    </div>
  );
};

export default Container;
