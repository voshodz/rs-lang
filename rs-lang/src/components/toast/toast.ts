import bootstrap from 'bootstrap';

export class ToastMenu {
  /*constructor() {

  }*/
  public showToast() {
    const toastTrigger: any = document.getElementById('liveToastBtn');
    const toastLiveExample: any = document.getElementById('liveToast');
    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample);

        toast.show();
      });
    }
  }
}
