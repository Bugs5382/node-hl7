/**
 * Parse Plan
 * @remarks Used to figure out the current HL7
 * message(s)/batch delimited used to encode this particular HL7 message
 * @since 1.0.0
 */
export class ParserPlan {
  /** @internal */
  separatorComponent: string;
  /** @internal */
  separatorEscape: string;
  /** @internal */
  separatorField: string;
  /** @internal */
  separatorRepetition: string;
  /** @internal */
  separatorSubComponent: string;

  /**
   * @since 1.0.0
   * @param data
   */
  constructor(data: string) {
    const seps = data.split("");

    this.separatorField = seps[0];
    this.separatorRepetition = seps.length > 2 ? seps[2] : "~";
    this.separatorComponent = seps.length > 1 ? seps[1] : "^";
    this.separatorSubComponent = seps.length > 4 ? seps[4] : "&";
    this.separatorEscape = seps.length > 3 ? seps[3] : "\\";
  }
}
