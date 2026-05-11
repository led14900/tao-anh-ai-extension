# 🎨 Tạo Ảnh AI — Chrome Extension cho Google Labs Flow

> **Tạo hàng loạt ảnh AI và tải về tự động** trên [labs.google](https://labs.google) — không cần code, không cần kỹ thuật.

---

## Phiên bản 2.0 — Cải tiến ứng dụng

- Tải ảnh hàng loạt có preflight trước khi chạy, tự cảnh báo khi chưa thấy ảnh hoặc vùng cuộn chưa phù hợp.
- Tự nhớ ảnh đã tải theo từng Flow để lần chạy sau bỏ qua ảnh cũ và tải tiếp phần còn thiếu.
- Tự retry khi tải ảnh lỗi tạm thời, ghi rõ ảnh lỗi trong báo cáo cuối.
- Có nhật ký phiên cho prompt, tải ảnh, retry, lỗi và ảnh đã bỏ qua.
- Hỗ trợ nhập/xuất danh sách prompt bằng file text.
- Gợi ý safe delay cho queue prompt lớn để Flow có thời gian render ổn định hơn.
- Có nút xóa Gemini API Key và xóa bộ nhớ ảnh đã tải của Flow hiện tại.

---

## ✨ Extension này làm được gì?

Khi bạn dùng **Google Labs Flow** để tạo ảnh bằng AI, thay vì phải:
- Gõ từng prompt tay ❌
- Chờ xong rồi bấm tải từng ảnh một ❌

Extension này giúp bạn:
- ✅ **Nhập nhiều prompt cùng lúc** — chạy từng cái một tự động
- ✅ **Tự động tải toàn bộ ảnh** đã render về máy (1K / 2K / 4K)
- ✅ Hiển thị **tiến trình trực tiếp** ngay trên giao diện
- ✅ Hoạt động qua **Side Panel** của Chrome — không cản giao diện Flow

---

## 📋 Yêu cầu

- Trình duyệt **Chromium-based** — hỗ trợ các trình duyệt sau:
  - 🌐 [Google Chrome](https://www.google.com/chrome/)
  - 🦊 [Cốc Cốc](https://coccoc.com/browser) *(trình duyệt phổ biến tại Việt Nam)*
  - 🔷 Microsoft Edge
  - 🦁 Brave
- Tài khoản Google có quyền truy cập [labs.google](https://labs.google)

---

## 🚀 Cài đặt (dành cho người mới — làm theo từng bước)

### Bước 1 — Tải extension về máy

Nhấn nút **`<> Code`** → chọn **`Download ZIP`** ở trang này.

Sau đó **giải nén** file ZIP ra một thư mục bất kỳ (ví dụ: `C:\TaoAnhAI\`).

---

### Bước 2 — Bật chế độ Developer trên trình duyệt

> 📌 Các bước dưới đây áp dụng cho **Chrome**, **Cốc Cốc**, **Edge**, **Brave** — giao diện tương tự nhau.

1. Mở trình duyệt, gõ vào thanh địa chỉ:
   - Chrome / Edge / Brave: `chrome://extensions`
   - Cốc Cốc: `coccoc://extensions`
2. Bật công tắc **"Chế độ dành cho nhà phát triển"** (Developer mode) ở góc trên bên phải

---

### Bước 3 — Nạp extension vào Chrome

1. Nhấn nút **"Tải tiện ích đã giải nén"** (Load unpacked)
2. Chọn đúng **thư mục vừa giải nén** ở Bước 1 (thư mục chứa file `manifest.json`)
3. Extension **"Tạo Ảnh AI"** sẽ xuất hiện trong danh sách ✅

---

### Bước 4 — Ghim extension lên thanh công cụ (tuỳ chọn)

Nhấn vào biểu tượng 🧩 (Extensions) trên Chrome → ghim **Tạo Ảnh AI** để dễ dùng.

---

## 🖥️ Cách sử dụng

### Mở extension

1. Truy cập **Google Labs Flow** theo đường dẫn: [https://labs.google/fx/vi/tools/flow](https://labs.google/fx/vi/tools/flow)
2. Trên trang Flow, nhấn nút **“Tạo với Flow”** (hoặc **“Create with Flow”**) để vào giao diện tạo ảnh
3. Nhấn vào biểu tượng **Tạo Ảnh AI** trên thanh trình duyệt để mở extension
4. Một **Side Panel** sẽ hiện ra bên phải — giờ bạn có thể bắt đầu!

---

### Tạo ảnh hàng loạt (Bulk Prompt)

1. Trong Side Panel, dán danh sách prompt vào ô nhập — **mỗi dòng là một prompt**
2. Chọn thời gian chờ giữa các lần tạo (khuyến nghị: 90 giây)
3. Nhấn **"Bắt đầu"** — extension sẽ tự động điền và submit từng prompt

> 💡 **Mẹo:** Để tạo nhiều ảnh đẹp, mỗi prompt nên mô tả chi tiết phong cách, ánh sáng, màu sắc.

> 📌 **Prompt có nhiều dòng?** Nếu một prompt cần xuống dòng (nhiều đoạn), hãy dùng `---` trên một dòng riêng để **ngăn cách giữa các prompt**:
> ```
> Một biệt thự hiện đại giữa rừng thông
> ánh sáng hoàng hôn, góc máy rộng
> ---
> Ảnh sản phẩm nước hoa đặt trên đá marble
> studio lighting, nền trắng tinh
> ---
> Portrait cô gái áo dài đỏ, hậu cảnh phố cổ Hà Nội
> ```

---

### 📝 Prompt mẫu — Copy & Paste ngay

Các ví dụ dưới đây có thể **copy thẳng vào ô nhập** để chạy hàng loạt.

---

**Ví dụ 1 — Mỗi dòng là 1 prompt (đơn giản nhất)**

```
A modern villa surrounded by pine forest, golden hour sunlight, wide angle, photorealistic, 8K
Perfume bottle on white marble surface, studio lighting, soft shadows, product photography, 4K
Vietnamese woman in traditional ao dai, red color, old Hanoi street, soft bokeh, film photography
Rice terraces in Mu Cang Chai, aerial view, golden harvest season, foggy morning, drone shot
Hoi An ancient town at night, lanterns reflecting on river, long exposure, vibrant colors
Skincare serum bottle floating on water with flower petals, luxury brand aesthetic, 4K
```

> 👆 Dán đoạn trên vào ô nhập → extension sẽ tạo **6 ảnh** liên tiếp tự động.

---

**Ví dụ 2 — Prompt nhiều dòng, dùng `---` để phân tách**

```
A luxury penthouse living room with floor-to-ceiling windows
overlooking city skyline at night, warm ambient lighting
Scandinavian minimal furniture, photorealistic, 8K
---
Vietnamese iced coffee with condensed milk
rustic wooden table, morning light streaming through window
lifestyle photography, warm tones, shallow depth of field
---
Portrait of young Vietnamese woman in modern ao dai
standing in blooming cherry blossom garden, Hanoi spring
soft natural light, editorial fashion, film grain, 35mm
---
Ha Long Bay limestone karsts at golden sunrise
misty atmosphere, calm water reflection, drone photography
cinematic color grade, ultra wide, travel photography
```

> 👆 Dán đoạn trên → extension tạo **4 ảnh**, mỗi ảnh dùng prompt **3 dòng** chi tiết.

---

> 💡 **Tip:** Thêm các từ khoá `photorealistic`, `8K`, `cinematic`, `soft bokeh`, `golden hour`, `studio lighting` vào cuối prompt để nâng chất lượng ảnh đầu ra.

---

### Tải ảnh hàng loạt (Bulk Download)

1. Sau khi Flow đã tạo xong các ảnh, chuyển sang tab **"Tải Ảnh"**
2. Chọn chất lượng: **1K / 2K / 4K** (phụ thuộc vào gói tài khoản của bạn)
3. Nhấn **"Tải hàng loạt"** — extension sẽ tự cuộn, quét ảnh mới và tải từng ảnh về máy cho đến khi hết ảnh tìm thấy

> 🎯 **Hướng dẫn để tải hàng loạt CHÍNH XÁC NHẤT:**
> - **Chế độ xem theo nhóm:** Hãy đảm bảo bạn đang ở chế độ xem theo nhóm (kích thước lưới nhỏ nhất S) trên Flow để extension dễ dàng quét ảnh.
> - **Quét đến khi hết ảnh mới:** Extension không giới hạn theo số prompt đã gửi. Mỗi prompt trên Flow có thể tạo 1-4 ảnh, nên tool sẽ tiếp tục quét và tải ảnh kế tiếp cho đến khi không tìm thấy ảnh mới.
> - **Có preflight trước khi chạy:** Extension sẽ kiểm tra nhanh xem Flow có ảnh đã render và vùng cuộn hợp lệ chưa.
> - **Nhớ ảnh đã tải:** Extension lưu ID ảnh đã tải theo từng Flow để lần chạy sau tự bỏ qua ảnh cũ. Nếu muốn tải lại từ đầu, dùng nút **"Xóa nhớ ảnh đã tải của Flow hiện tại"**.
> - **Tự retry khi lỗi tạm thời:** Nếu menu tải hoặc lựa chọn chất lượng bị chậm, extension sẽ tự thử lại trước khi báo lỗi.
> - **Cuộn tới bức ảnh đầu tiên:** Vì danh sách ảnh của Google Labs là danh sách ảo (chỉ hiển thị một phần khi cuộn), extension sẽ quét và tải **từ trên xuống dưới**. Nếu bạn muốn tải toàn bộ, hãy **cuộn trang lên tận cùng (hoặc vị trí bức ảnh đầu tiên bạn muốn tải)** sao cho ảnh đầu tiên hiện trên màn hình rồi mới bấm "Tải hàng loạt".
> - **Chờ load trang:** Cuộn nhẹ trang để đảm bảo các hình thu nhỏ (thumbnails) đã hiện lên ít nhất 1 phần trước khi bấm nút tải.
> - **Để yên chuột & bàn phím:** Khi extension đang bắt đầu mở ảnh và tải, **TUYỆT ĐỐI KHÔNG** click chuột lung tung, không nhấn phím Escape hay mở tab khác đè lên. Việc này có thể làm gián đoạn luồng click tự động của extension.
> - **Không bị che khuất:** Đảm bảo không có popup hay thông báo lỗi nào của trình duyệt che khuất phần hiển thị ảnh.
> - **Mạng chậm / Bị sót ảnh:** Nếu mạng tải chậm hoặc bị sót ảnh, chỉ việc cuộn lên trên cùng và **nhấn "Tải hàng loạt" thêm một lần nữa**. Thuật toán thông minh của extension sẽ tự động quét lại, bỏ qua các ảnh đã tải rồi và chỉ tải nốt phần bị thiếu!

---

## ❓ Câu hỏi thường gặp

**Q: Extension có thu thập dữ liệu của tôi không?**
> Không. Extension chỉ hoạt động trực tiếp trên trang labs.google trong trình duyệt của bạn. Không có dữ liệu nào được gửi ra ngoài.

**Q: Tôi dùng được chất lượng 4K không?**
> Phụ thuộc vào gói đăng ký Google Labs của bạn. Extension sẽ thông báo nếu tài khoản không hỗ trợ chất lượng đã chọn.

**Q: Tôi dùng Cốc Cốc có được không?**
> Được! Cốc Cốc là trình duyệt Chromium nên hoàn toàn tương thích. Vào `coccoc://extensions`, bật Developer mode và cài như Chrome bình thường.

**Q: Extension có hoạt động trên Firefox không?**
> Không. Chỉ hỗ trợ các trình duyệt **Chromium-based** (Chrome, Cốc Cốc, Edge, Brave...).

**Q: Tại sao extension báo "Flow chưa sẵn sàng"?**
> Flow cần một khoảng thời gian để render xong ảnh trước. Hãy tăng thời gian chờ giữa các prompt lên 90–120 giây.

---

## 📞 Liên hệ & Hỗ trợ

Được phát triển bởi **airender.vn**

- 📱 Zalo / Phone: **0896009111** (Phạm Ngọc Tú)
- 🌐 Website: [airender.vn](https://airender.vn)

---

## 📄 Giấy phép

Dự án này được phát hành để sử dụng tự do. Nghiêm cấm tái phân phối dưới dạng thương mại mà không có sự cho phép.
