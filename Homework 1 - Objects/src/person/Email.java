package person;

/**
 * This class represents an email. An email has a name and emailAddress.
 */
public class Email {
  public String name;
  public String emailAddress;

  /**
   * Construct an Email object that has provided name and emailAddress.
   * @param name the name of the email.
   * @param emailAddress the emailAddress of the email.
   */

  public Email(String name, String emailAddress) {
    this.name = name;
    this.emailAddress = emailAddress;
  }

  /**
   * Returns the name of the email.
   * 
   * @return the name of the email
   */
  public String getname() {
    return this.name;
  }

  /**
   * Returns the email Address email.
   * 
   * @return the email Address email.
   */
  public String getemailAddress() {
    return this.emailAddress;
  }

}
