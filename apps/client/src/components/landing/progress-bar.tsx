interface ProgressBar {
  bgcolor: string;
  completed: number;
}

const ProgressBar = ({ bgcolor, completed }: ProgressBar) => {
  return (
    <div className="h-8 w-full bg-gray-300 rounded-full my-12">
      <div
        className={`h-full rounded-full flex items-center justify-end`}
        style={{
          width: `${completed}%`,
          backgroundColor: bgcolor,
        }}
      >
        <span className="text-white font-bold pr-2">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
