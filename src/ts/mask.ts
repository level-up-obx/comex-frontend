import IMask, { InputMask, MaskElement } from "imask";

export function cpfMask(input: HTMLInputElement): InputMask<{ mask: string }> {
  const mask: InputMask<{ mask: string }> = IMask(input, {
    mask: "000.000.000-00",
  });
  return mask;
}

export function telephoneMask(
  input: HTMLInputElement
): InputMask<{ mask: string }> {
  const mask: InputMask<{ mask: string }> = IMask(input, {
    mask: "(00) 00000-0000",
  });
  return mask;
}

export function moneyMask(
  input: HTMLInputElement
): InputMask<{ mask: string }> {
  const mask: InputMask<{ mask: string }> = IMask(input, {
    mask: "R$: num",
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: ".",
      },
    },
  });
  return mask;
}

export function quantityMask(input: HTMLInputElement): InputMask<{ mask: string }> {
    const mask: InputMask<{ mask: string }> = IMask(input, {
        mask: "num",
        blocks: {
            num: {
                mask: Number,
                signed: false,
                thousandsSeparator: '.',
                min: 1
            }
        }
    })
    return mask
}

export function cepMask(input: HTMLInputElement): InputMask<{ mask: string }> {
  const mask: InputMask<{ mask: string }> = IMask(input, {
    mask: "00000-000",
    blocks: {
        num: {
            mask: Number,
            signed: false,
            min: 1,
            max: 9
        }
    }
  })
  return mask
}

export function numberMask(input: HTMLInputElement): InputMask<{ mask: string}> {
  const mask: InputMask<{ mask: string }> = IMask(input, {
    mask: "0000",
    blocks: {
        num: {
            mask: Number,
            signed: false,
            min: 1,
            max: 9999
        }
    }
  })
  return mask
}