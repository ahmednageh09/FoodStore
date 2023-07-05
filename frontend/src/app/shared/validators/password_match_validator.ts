import { AbstractControl } from "@angular/forms"

export const passwordsMatchValidator = (passwordControlName: string, 
    confirmPasswordControlName: string) => {
        const validator = (form: AbstractControl) => {
            const passwordControl = form.get(passwordControlName);
            const confirmPasswordControle = form.get(confirmPasswordControlName);

            if(!passwordControl || !confirmPasswordControle) return;

            if(passwordControl.value !== confirmPasswordControle.value) {
                confirmPasswordControle.setErrors({notMatch: true});
            }else {
                const errors = confirmPasswordControle.errors;
                if(!errors) return;

                delete errors.notMatch;
                confirmPasswordControle.setErrors(errors);
            }
        }

        return validator;
}