package person;

/**
 * This class represents a Cat The cat has a first name, age, type, weight,length, adopted.
 */
public class Cat {
  public String name;
  public int age;
  public String type;
  public float weight;
  public float length;
  public boolean adopted;

  /**
  * Constructs a cat object and initializes it to the given first name, last name and year 
  * of birth.
  * @param name the first name of this cat
  * @param age the age of this cat
  * @param type the type of this cat
  * @param weight the weight of this cat
  * @param length the length of this cat
  * @param adopted the adopted of this cat
  */
  public Cat(String name, int age, String type, float weight, float length, boolean adopted) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.weight = weight;
    this.length = length;
    this.adopted = adopted;

  }

  /**
   * Get the name of this cat.
   *
   * @return the name of this cat
   */
  public String getName() {
    return name;
  }

  /**
   * Get the age of this cat.
   *
   * @return the age of this cat
   */
  public int getAge() {
    return age;
  }

  /**
   * Get the type of this cat.
   *
   * @return the type of this cat
   */
  public String getType() {
    return type;
  }

  /**
   * Get the weight of this cat.
   *
   * @return the weight of this cat
   */
  public float getWeight() {
    return weight;
  }

  /**
   * Get the length of this cat.
   *
   * @return the length of this cat
   */
  public float getLength() {
    return length;
  }

  /**
   * is the adopt of this cat.
   *
   * @return the adopt of this cat
   */
  public boolean isAdopted() {
    return adopted;
  }
}
