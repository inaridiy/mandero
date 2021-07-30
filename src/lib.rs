use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn check_divergence(re: f64, im: f64, k: usize) -> u8 {
    let mut xre = 0.0;
    let mut xim = 0.0;
    for i in 1..k {
        let re_next = xre * xre - xim * xim + re;
        let im_next = 2.0 * xre * xim + im;
        xre = re_next;
        xim = im_next;

        if xre * xre + xim * xim > 4.0 {
            return i as u8;
        }
    }
    return 0 as u8;
}
