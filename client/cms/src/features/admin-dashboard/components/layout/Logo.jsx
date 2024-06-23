function Logo() {
  return (
    <div className="flex justify-center text-white items-center p-[10px] bg-main-color">
      <div className="flex item-center justify-center size-[80px] text-2xl rounded-[50%]">
        <img
          src="/SISlogo2.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Logo;
