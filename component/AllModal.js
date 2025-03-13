import { useLanguage } from "@/app/Context/LanguageContext";

const AllModal = ({setOpenModal}) => {
  const {language} = useLanguage();
  const texts = {
    en: {
      title: "Invitation Address Successful",
      description: "Enter valid Invitation address or login through the Invite code.",
      ok: 'Ok',
      cancel: 'Cancel'
    },
    ko: {
      title: "초대 주소 성공",
      description: "유효한 초대 주소를 입력하거나 초대 코드를 통해 로그인하세요.",
      ok: '좋아요',
      cancel: "취소",
    },
  };
  const currentText = texts[language];
  return (
    <div className="flex bg-[#FCFCFD] text-center w-80 md:w-96 border border-[#E6E8EC] rounded-xl shadow-2xl gap-5 flex-col items-center fixed top-1/2  z-50  left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center py-7 px-2 md:px-6">
        <h1 className="text-[#34C759] text-lg md:text-2xl ">{currentText.title}</h1>
        <p className="text-sm">{currentText.description}</p>
        <div className="flex gap-3">
            <button onClick={()=> setOpenModal(false)} className="cursor-pointer bg-[#F4F5F6]  px-3 py-1 text-black w-20 rounded">{currentText.ok}</button>
            <button onClick={()=> setOpenModal(false)} className="bg-[#02CCE6] cursor-pointer px-3 py-1 text-white w-20 rounded">{currentText.cancel}</button> 
        </div>
    </div>
  )
}

export default AllModal