# Tạo Ảnh AI - Hướng Dẫn Cài Đặt Và Sử Dụng

`Tạo Ảnh AI` là tiện ích mở rộng cho Google Chrome, giúp bạn gửi nhiều prompt tạo ảnh vào `labs.google` một cách tự động. Bạn chỉ cần nhập danh sách prompt, chọn số lần lặp, chọn thời gian chờ giữa các lần gửi, sau đó bấm gửi.

Extension này phù hợp cho người cần tạo nhiều ảnh liên tục trên `labs.google`, không cần biết kỹ thuật và không cần cài thêm phần mềm lập trình.

Thông tin tác giả:

- Website: `https://airender.vn`
- Thương hiệu: `airender.vn #airender`
- Tác giả: `Phạm Ngọc Tú`
- Phone/Zalo: `0896009111`

## 1. Bạn cần chuẩn bị gì?

Trước khi cài đặt, hãy chuẩn bị:

- Máy tính có cài Google Chrome.
- File `TaoAnhAI.zip` được gửi kèm.
- Tài khoản Google có thể dùng được trang `https://labs.google/`.
- Gemini API Key nếu muốn dùng tính năng `AI rewrite`. Nếu chỉ gửi prompt tự động thì không cần API Key.

Lưu ý: Extension chỉ hoạt động tốt nhất trên trang `labs.google`. Nếu bạn đang mở trang khác, extension sẽ không tương thích hoàn toàn.

## 2. Cài đặt extension vào Chrome

### Bước 1: Giải nén file TaoAnhAI.zip

1. Tìm file `TaoAnhAI.zip` trên máy tính.
2. Nhấn chuột phải vào file đó.
3. Chọn `Extract All...` hoặc `Giải nén tất cả`.
4. Sau khi giải nén xong, mở thư mục vừa được tạo ra.
5. Kiểm tra trong thư mục có file `manifest.json`.

Quan trọng: Lát nữa khi Chrome hỏi chọn thư mục, bạn phải chọn đúng thư mục có file `manifest.json` ở bên trong.

### Bước 2: Mở trang quản lý extension của Chrome

1. Mở Google Chrome.
2. Bấm vào thanh địa chỉ phía trên.
3. Nhập dòng này:

```text
chrome://extensions
```

4. Nhấn `Enter`.
5. Ở góc phải phía trên, bật công tắc `Developer mode`.

Nếu Chrome đang dùng tiếng Việt, mục này có thể hiển thị là `Chế độ dành cho nhà phát triển`.

### Bước 3: Nạp extension

1. Bấm nút `Load unpacked`.
2. Chọn thư mục bạn vừa giải nén ở Bước 1.
3. Bấm `Select Folder`.
4. Nếu cài đúng, bạn sẽ thấy extension `Tạo Ảnh AI` xuất hiện trong danh sách.

Nếu không thấy extension, thường là do chọn sai thư mục. Hãy chọn lại đúng thư mục có file `manifest.json`.

### Bước 4: Ghim extension để dễ mở

1. Nhìn lên góc phải của Chrome.
2. Bấm biểu tượng mảnh ghép.
3. Tìm `Tạo Ảnh AI`.
4. Bấm biểu tượng ghim.

Sau khi ghim, icon extension sẽ nằm trên thanh công cụ Chrome. Bạn chỉ cần bấm icon đó để mở bảng điều khiển.

## 3. Mở trang tạo ảnh

1. Mở Chrome.
2. Truy cập:

```text
https://labs.google/
```

3. Đăng nhập tài khoản Google nếu được yêu cầu.
4. Mở đúng công cụ tạo ảnh hoặc trang Flow trong `labs.google`.
5. Chờ trang tải xong.
6. Đảm bảo bạn nhìn thấy ô nhập prompt trên trang.
7. Bấm icon `Tạo Ảnh AI` trên Chrome để mở bảng điều khiển bên cạnh.

Nếu bảng điều khiển chưa mở, hãy thử bấm lại icon extension hoặc tải lại trang `labs.google`.

## 4. Các phần chính trong extension

Trong bảng điều khiển, bạn sẽ thấy các phần sau:

- `Danh sách prompt`: nơi nhập các prompt muốn gửi.
- `AI rewrite`: dùng AI để viết lại prompt rõ hơn.
- `Prompt sẽ gửi`: nơi xem trước prompt trước khi gửi.
- `Mỗi prompt`: chọn mỗi prompt sẽ được gửi bao nhiêu lần.
- `Cách nhau`: chọn thời gian nghỉ giữa hai lần gửi.
- `Gửi vào labs.google`: bắt đầu gửi prompt tự động.
- `Dừng`: dừng quá trình gửi nếu đang chạy.
- Icon bánh răng: mở phần cài đặt Gemini API Key.
- Nút `VI/EN`: đổi ngôn ngữ giao diện.

## 5. Cách nhập prompt

Bạn có thể nhập prompt theo 2 cách.

### Cách 1: Mỗi dòng là một prompt

Cách này phù hợp khi prompt ngắn.

Ví dụ:

```text
Một biệt thự hiện đại giữa rừng thông, ánh sáng hoàng hôn
Ảnh sản phẩm nước hoa đặt trên đá marble, ánh sáng studio
Một robot thân thiện trong thành phố tương lai, phong cách điện ảnh
```

Ví dụ trên sẽ được hiểu là 3 prompt.

### Cách 2: Prompt dài nhiều dòng

Nếu một prompt cần viết nhiều dòng, hãy dùng một dòng chỉ có `---` để ngăn cách giữa các prompt.

Ví dụ:

```text
Một căn phòng khách tối giản
Ánh sáng tự nhiên từ cửa sổ lớn
Sofa trắng, vật liệu gỗ sáng
---
Một quán cà phê nhỏ trong hẻm
Ánh sáng buổi sáng
Không khí ấm áp, phong cách ảnh điện ảnh
```

Ví dụ trên sẽ được hiểu là 2 prompt.

Bạn cũng có thể dùng `===` thay cho `---`.

## 6. Kiểm tra prompt trước khi gửi

Sau khi nhập prompt, hãy nhìn phần `Prompt sẽ gửi`.

Phần này giúp bạn kiểm tra:

- Extension đã tách đúng số prompt chưa.
- Prompt có bị dính vào nhau không.
- Prompt dài nhiều dòng đã được chia đúng chưa.

Nếu thấy sai, hãy sửa lại ở ô `Danh sách prompt` trước khi bấm gửi.

## 7. Chọn số lần lặp

Mục `Mỗi prompt` cho biết mỗi prompt sẽ được gửi bao nhiêu lần.

Ví dụ:

- Bạn có 5 prompt.
- Bạn chọn `3x`.
- Tổng số lượt gửi sẽ là 15 lượt.

Các lựa chọn thường có:

```text
1x, 2x, 3x, 5x, 10x
```

Nếu mới dùng lần đầu, nên chọn `1x` để thử trước.

## 8. Chọn thời gian chờ giữa các lần gửi

Mục `Cách nhau` là thời gian nghỉ giữa hai lượt gửi.

Ví dụ:

- Chọn `30s` nghĩa là sau khi gửi một prompt, extension chờ 30 giây rồi mới gửi tiếp.

Các lựa chọn thường có:

```text
3s, 5s, 10s, 20s, 30s, 45s, 60s
```

Khuyến nghị:

- Nếu chỉ thử vài prompt, có thể chọn `10s` hoặc `20s`.
- Nếu gửi nhiều prompt, nên chọn `30s`, `45s` hoặc `60s`.
- Nếu trang `labs.google` phản hồi chậm, hãy tăng thời gian chờ.

Không nên chọn thời gian quá ngắn khi gửi nhiều ảnh, vì trang có thể chưa kịp xử lý lượt trước.

## 9. Gửi prompt tự động

Sau khi đã nhập prompt và chọn cài đặt:

1. Đảm bảo tab đang mở là `labs.google`.
2. Đảm bảo trên trang có ô nhập prompt.
3. Bấm `Gửi vào labs.google`.
4. Giữ nguyên tab đó trong lúc extension chạy.
5. Chờ extension gửi lần lượt từng prompt.

Trong lúc chạy, extension sẽ tự:

- Tìm ô nhập prompt trên `labs.google`.
- Điền prompt vào ô nhập.
- Bấm nút tạo ảnh hoặc nút gửi.
- Chờ theo số giây bạn đã chọn.
- Chuyển sang prompt tiếp theo.

Không nên chuyển sang tab khác trong khi extension đang chạy, vì extension cần thao tác trên tab `labs.google` đang mở.

## 10. Dừng khi đang chạy

Khi extension đang gửi prompt, nút gửi sẽ đổi thành nút `Dừng`.

Để dừng:

1. Bấm `Dừng`.
2. Extension sẽ dừng queue.
3. Nếu đang chờ giữa hai lượt gửi, extension sẽ dừng trước lượt tiếp theo.
4. Nếu đang gửi một lượt hiện tại, extension có thể hoàn tất lượt đó rồi mới dừng.

Sau khi dừng, bạn có thể sửa prompt, đổi thời gian chờ rồi chạy lại.

## 11. Dùng AI Rewrite để viết lại prompt

`AI rewrite` là tính năng dùng Gemini API để viết lại prompt cho rõ ràng hơn, chi tiết hơn và phù hợp hơn với tạo ảnh.

Tính năng này không bắt buộc. Nếu không dùng `AI rewrite`, bạn vẫn gửi prompt tự động bình thường.

AI rewrite sẽ:

- Giữ nguyên số lượng prompt.
- Giữ nguyên thứ tự prompt.
- Viết lại prompt theo hướng dễ tạo ảnh hơn.
- Ưu tiên prompt tiếng Anh để kết quả tạo ảnh ổn định hơn.
- Không tự thêm tỷ lệ khung hình, độ phân giải, seed hoặc tên file.

## 12. Cài Gemini API Key cho AI Rewrite

Bạn chỉ cần làm phần này nếu muốn dùng nút `AI rewrite`.

### Bước 1: Lấy API Key

1. Mở trang:

```text
https://aistudio.google.com/app/apikey
```

2. Đăng nhập tài khoản Google.
3. Chọn `Create API key`.
4. Sao chép key bắt đầu bằng `AIzaSy...`.

### Bước 2: Dán API Key vào extension

1. Mở extension `Tạo Ảnh AI`.
2. Bấm icon bánh răng.
3. Dán API Key vào ô `Gemini API Key`.
4. Bấm `Lưu cài đặt`.

API Key được lưu trong Chrome trên máy của bạn. Extension chỉ dùng key này cho tính năng `AI rewrite`.

## 13. Cách dùng AI Rewrite

1. Nhập danh sách prompt vào ô `Danh sách prompt`.
2. Bấm `AI rewrite`.
3. Chờ AI xử lý.
4. Sau khi xử lý xong, prompt trong ô nhập sẽ được thay bằng bản đã viết lại.
5. Đọc lại prompt.
6. Nếu thấy ổn, bấm `Gửi vào labs.google`.

Nếu AI rewrite báo lỗi, hãy kiểm tra:

- Đã nhập API Key chưa.
- API Key có bị sai không.
- Tài khoản Google AI Studio còn quota không.
- Mạng Internet có ổn định không.

## 14. Cập nhật extension khi có bản mới

Khi bạn nhận được file `TaoAnhAI.zip` mới:

1. Giải nén file ZIP mới.
2. Mở Chrome.
3. Vào:

```text
chrome://extensions
```

4. Tìm extension `Tạo Ảnh AI`.
5. Bấm nút `Remove` hoặc `Gỡ` để gỡ bản cũ.
6. Bấm `Load unpacked`.
7. Chọn thư mục mới vừa giải nén.
8. Mở lại `labs.google` và dùng bình thường.

Cách này dễ hiểu và ít nhầm lẫn nhất cho người dùng phổ thông.

## 15. Gỡ extension

Nếu không muốn dùng nữa:

1. Mở Chrome.
2. Vào:

```text
chrome://extensions
```

3. Tìm `Tạo Ảnh AI`.
4. Bấm `Remove` hoặc `Gỡ`.
5. Xác nhận gỡ.

## 16. Lỗi thường gặp và cách xử lý

| Vấn đề | Cách xử lý |
|---|---|
| Không thấy extension sau khi cài | Kiểm tra đã chọn đúng thư mục có file `manifest.json` chưa |
| Bấm icon nhưng không mở bảng điều khiển | Tải lại Chrome, hoặc vào `chrome://extensions` tắt rồi bật lại extension |
| Extension báo không chạy trên trang hiện tại | Mở đúng trang `https://labs.google/` |
| Không tìm thấy ô nhập prompt | Chờ trang tải xong, mở đúng màn hình có ô nhập prompt |
| Prompt đã nhập nhưng không bấm được nút tạo | Tăng thời gian chờ lên `30s`, `45s` hoặc `60s` |
| Lượt đầu chạy được, lượt sau lỗi | Trang `labs.google` chưa xử lý xong lượt trước, hãy tăng thời gian chờ |
| AI rewrite báo thiếu API Key | Vào cài đặt và nhập Gemini API Key |
| AI rewrite báo lỗi | Kiểm tra API Key, quota Google AI Studio và kết nối mạng |
| Sau khi cập nhật extension bị lỗi | Gỡ bản cũ, cài lại bản mới và tải lại trang `labs.google` |

## 17. Lưu ý để dùng ổn định

- Nên thử với 1 hoặc 2 prompt trước khi chạy số lượng lớn.
- Không đóng tab `labs.google` khi extension đang chạy.
- Không chuyển sang tab khác trong lúc đang gửi prompt.
- Không đặt thời gian chờ quá thấp khi tạo nhiều ảnh.
- Nếu gửi nhiều prompt, nên dùng thời gian chờ từ `30s` trở lên.
- Sau khi dùng `AI rewrite`, nên đọc lại prompt trước khi gửi.
- Với prompt dài nhiều dòng, dùng `---` để tách từng prompt.

## 18. Quyền truy cập của extension

Extension cần một số quyền để hoạt động:

- Mở bảng điều khiển bên cạnh Chrome.
- Đọc tab đang mở để biết bạn có đang ở `labs.google` không.
- Điền prompt và bấm nút tạo ảnh trên `labs.google`.
- Lưu Gemini API Key trong Chrome nếu bạn dùng `AI rewrite`.
- Gọi Gemini API khi bạn bấm `AI rewrite`.

Extension chỉ thao tác tự động trên `labs.google`.

## 19. Liên hệ hỗ trợ

Khi cần hỗ trợ, bạn nên gửi kèm:

- Ảnh chụp màn hình lỗi.
- Bạn đang dùng Chrome phiên bản nào.
- Bạn đang lỗi khi cài đặt, gửi prompt hay dùng `AI rewrite`.
- Nội dung thông báo lỗi nếu có.

Thông tin liên hệ:

- Website: `https://airender.vn`
- Zalo: `0896009111`
- Tác giả: `Phạm Ngọc Tú`
- Thương hiệu: `airender.vn #airender`
