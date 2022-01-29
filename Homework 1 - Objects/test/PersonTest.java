
import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import person.Email;
import person.Person;


/**
 * A JUnit test class for the Person class.
 */
public class PersonTest {

  private Person john;
  private Email email;

  @Before
  public void setUp() {
    john = new Person("john", "doe", 1989, 626349999, email);
  }

  @Test
  public void testFirst() {
    assertEquals("john", john.getFirstName());

  }

  @Test
  public void testSecond() {
    assertEquals("doe", john.getLastName());
  }

  @Test
  public void testYearOfBirth() {
    assertEquals(1989, john.getYearOfBirth());
  }

  @Test
  public void testPhoneNumber() {
    assertEquals(626349999, john.getPhoneNumber());
  }

  @Test
  public void testEmail() {
    assertEquals(email, john.getEmail());
  }

}
