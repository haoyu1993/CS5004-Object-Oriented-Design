import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import person.Cat;

/**
 * A JUnit test class for the Cat class.
 */
public class CatTest {

  private Cat cat;

  @Before
  public void setUp() {
    cat = new Cat("Tom", 2, "American Curl", 15.00f, 30.00f, false);

  }

  @Test
  public void testName() {
    assertEquals("Tom", cat.getName());
  }

  @Test
  public void testAge() {
    assertEquals(2, cat.getAge());
  }
  
  @Test
  public void testType() {
    assertEquals("American Curl", cat.getType());
  }
  
  @Test
  public void testWeight() {
    assertEquals(15.00f, cat.getWeight(), 0.0001);
  }
  
  @Test
  public void testLength() {
    assertEquals(30.00f, cat.getLength(), 0.0001);
  }

  @Test
  public void testAdopted() {
    assertEquals(false, cat.isAdopted());
  }

}
