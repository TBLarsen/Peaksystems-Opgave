namespace PeakApi.DataBase.Entities
{
    public class ProductEntity
    {
        public required string Id { get; set; }

        public required int Volume { get; set; }

        public required string Location { get; set; }
    }
}