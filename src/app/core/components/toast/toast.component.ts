import { Component, HostBinding, TemplateRef } from '@angular/core';
import { ToastService } from '@core/services/toast.service';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  @HostBinding('[class.ngb-toasts]') 'true';
  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}



