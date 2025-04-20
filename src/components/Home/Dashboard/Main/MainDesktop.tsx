const MainDesktop = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col items-start justify-center gap-4 p-4 text-center">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl font-extrabold text-blue-dark">دایره سلامت</h1>
          <h2 className="text-xl font-medium text-base-90">مرجع تخصصی سلامت و بیماری‌های پستان</h2>
        </div>
        <div className="flex items-start justify-center gap-2 text-base-90">
          <span>در دایره سلامت شما می‌توانید سوالات خود را در حوزه‌ی</span>
          <strong>بیماری‌های پستان و سرطان پستان</strong>
          <span>از پزشکان فوق تخصص پستان بپرسید.</span>
        </div>
      </div>
    </div>
  )
}

export default MainDesktop
