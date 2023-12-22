import { useRouter } from "next/navigation";
import CreateAcc from "../Components/CreateAcc/CreateAcc";
import OverLeft from "../Components/overlays/OverLeft";
import ArrowBounce from "../Components/Misc/Arrow";

export default function Login() {
  const bodyStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    width: '768px',
    maxWidth: '100%',
    minHeight: '480px',
  };
  const mainDivStyle = {
    backgroundColor: '#f6f5f7',
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center" style={mainDivStyle}>
        <div className='relative md:flex h-full items-center md:flex-row md:h-4/5 md:w-3/5 md:justify-around md:items-center' style={bodyStyle}>
          <div className='w-full relative md:static top-1/4 md:w-1/2 md:order-2'>
            <CreateAcc />
          </div>
            <div className="md:hidden relative top-1/3 left-1/2">
                <ArrowBounce/>
            </div>

          <div className='relative top-1/3 md:static md:w-1/2 h-full md:order-1'>
            <OverLeft routes='/Login'/>
          </div>
        </div>
      </div>
    </div>
  );
}
