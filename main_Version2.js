// إظهار نافذة المالك عند الضغط على F8
document.addEventListener('keydown', function(e) {
  if (e.key === 'F8') {
    document.getElementById('admin-login-modal').classList.add('active');
  }
});

// تسجيل دخول المالك
function adminLogin() {
  const username = document.getElementById('admin-username').value;
  const password = document.getElementById('admin-password').value;
  if(username === "admin" && password === "your_password") {
    document.getElementById('admin-menu').classList.add('active');
    document.getElementById('admin-login-modal').classList.remove('active');
  } else {
    alert('اسم المستخدم أو كلمة المرور خاطئة');
  }
}

// أمثلة على وظائف الإدارة
function openNewPostForm() { alert('نموذج نشر منشور جديد'); }
function openNewMangaForm() { alert('نموذج نشر مانغا'); }
function openUploadImageForm() { 
  document.getElementById('upload-image-form').scrollIntoView({behavior: 'smooth'});
}

// نموذج رفع صورة
document.getElementById('upload-image-form').onsubmit = async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  // عدّل الرابط التالي حسب إعدادات الخادم لديك
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData
  });
  if (response.ok) alert('تم رفع الصورة بنجاح');
  else alert('حدث خطأ أثناء الرفع');
};

// تغيير لغة الموقع تلقائيًا حسب المتصفح
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('ar')) {
  document.documentElement.lang = 'ar';
  document.body.dir = 'rtl';
} else {
  document.documentElement.lang = 'en';
  document.body.dir = 'ltr';
}