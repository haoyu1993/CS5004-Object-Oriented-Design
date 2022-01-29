
import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import person.Email;

/**
 * A JUnit test class for the Email class.
 */
public class EmailTest {

  private Email email;

  @Before
  public void setUp() {
    email = new Email("haoyu", "zhanghaoyu1993@gmail.com");

  }

  @Test
  public void testUsername() {
    assertEquals("haoyu", email.getname());
  }

  @Test
  public void testAddress() {
    assertEquals("zhanghaoyu1993@gmail.com", email.getemailAddress());
  }

}
