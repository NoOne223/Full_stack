import ScrolltopButton from '@/components/buttons/ScrolltopButton';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import TabContent from '@/components/tab/TabContent';
import type { Metadata } from 'next'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Bar',
  description: 'Homepage',
}
export default function Home() {
  return (
   <>
    <Header />
    <main>
      <section className='mt-16'>
        <div className='container mx-auto p-3'>
          <div className='flex items-center gap-x-7'>
            <Image className='h-[500px] w-2/5 object-cover rounded-xl' src='/images/bartender.jpeg' width={500} height={500} alt='Bartender'></Image>
            <div className='w-3/5'>
              <h2 className='uppercase font-bold text-5xl italic mb-3'>Xin chào!</h2>
              <p className='mb-3'>
              Xin chào chúng tôi là <strong className='italic uppercase text-2xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>Hi Bar</strong>, 
              một điểm đến lý tưởng dành cho những ai yêu thích không gian thư giãn và đồ uống chất lượng. Với 3 năm hoạt động, chúng tôi tự hào mang đến những trải nghiệm tuyệt vời, 
              từ đồ uống sáng tạo, âm nhạc sống động đến không gian ấm cúng và hiện đại.
              </p>
              <div className='italic flex items-center justify-center gap-x-2'>
                <p>Hãy đến và tận hưởng những khoảnh khắc đáng nhớ cùng bạn bè tại Hi Bar!</p>
                <Image src='/images/cheers.png' width={25} height={25} alt='Cheers'></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-16'>
        <div className='container mx-auto p-3'>
          <div className='grid grid-cols-4 gap-5'>
            <div className='border shadow-inner-custom shadow-violet-500/50 rounded-xl py-9 px-6'>
              <Image className='h-28 object-contain w-full' src='/images/cocktail.png' width={500} height={500} alt='Image'></Image>
              <h2 className='uppercase font-bold text-5xl my-3 text-center'>Đồ uống</h2>
              <p>
              Tại <strong className='italic uppercase text-2xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>Hi Bar</strong>, chúng tôi tự hào 
              mang đến thực đơn đồ uống đa dạng, từ những ly cocktail sáng tạo, mocktail tươi mát đến những ly rượu vang tinh tế và bia thủ công đặc biệt. Ngoài ra chúng tôi còn có 
              các loại nước khác để phù hợp với từng lứa tuổi.
              </p>
            </div>
            <div className='border shadow-inner-custom shadow-pink-500/50 rounded-xl py-9 px-6'>
              <Image className='h-28 object-contain w-full' src='/images/pizza.png' width={500} height={500} alt='Image'></Image>
              <h2 className='uppercase font-bold text-5xl my-3 text-center'>Đồ ăn</h2>
              <p>
              Để mà so sánh đồ ăn tại <strong className='italic uppercase text-2xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>Hi Bar</strong> với 
              các nơi khác thì chúng tôi khẳng định chỉ thua món ăn 'mẹ' nấu thôi ! Ở đây đồ ăn rất đa dạng, được chế biến từ các nguyên liệu sạch và tốt cho sức khỏe.
              </p>
            </div>
            <div className='border shadow-inner-custom shadow-emerald-500/50 rounded-xl py-9 px-6'>
              <Image className='h-28 object-contain w-full' src='/images/wine-bar.png' width={500} height={500} alt='Image'></Image>
              <h2 className='uppercase font-bold text-5xl my-3 text-center'>Không gian</h2>
              <div>
                <p>Không gian của <strong className='italic uppercase text-2xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>Hi Bar</strong> rộng rãi và thoải mái, 
                không chen chúc. Tổng cộng có 4 tầng với mỗi không gian khác nhau, hãy cùng đến để trải nghiệm nhé.
                </p>
              </div>
            </div>
            <div className='border shadow-inner-custom shadow-cyan-500/50 rounded-xl py-9 px-6'>
              <Image className='h-28 object-contain w-full' src='/images/serving.png' width={500} height={500} alt='Image'></Image>
              <h2 className='uppercase font-bold text-5xl my-3 text-center'>Phục vụ</h2>
              <p>
              Chúng tôi đặt chữ "Tín" lên hàng đầu. Mọi thứ được phục vụ tại <strong className='italic uppercase text-2xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>Hi Bar</strong> luôn đúng với 
              những gì được mô tả. Nhân viên được chọn lọc và đào tạo chuyên sâu. Nếu có gì không hài lòng xin hãy feedback về cho chúng tôi bất kì lúc nào.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-16'>
        <TabContent />
      </section>
    </main>
    <Footer />
    <ScrolltopButton />
   </>
  );
}
